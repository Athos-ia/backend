const fs = require('fs');
const path = require('path');
const pool = require('./config/db');

async function run() {
  const client = await pool.connect();
  try {
    await client.query(`CREATE TABLE IF NOT EXISTS migrations (
      id SERIAL PRIMARY KEY,
      name TEXT UNIQUE NOT NULL,
      run_on TIMESTAMP NOT NULL DEFAULT NOW()
    )`);

    const { rows } = await client.query('SELECT name FROM migrations');
    const applied = new Set(rows.map(r => r.name));

    const dir = path.join(__dirname, 'migrations');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.sql')).sort();

    for (const file of files) {
      if (applied.has(file)) continue;
      const sql = fs.readFileSync(path.join(dir, file), 'utf8');
      console.log(`Running ${file}...`);
      await client.query(sql);
      await client.query('INSERT INTO migrations(name) VALUES($1)', [file]);
    }

    console.log('Migrations complete.');
  } catch (err) {
    console.error('Migration failed', err);
  } finally {
    client.release();
    await pool.end();
  }
}

run();
