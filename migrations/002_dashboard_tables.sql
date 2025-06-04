-- Create additional tables used by dashboard statistics

-- add created_at column to sales if not exists
ALTER TABLE sales
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMP NOT NULL DEFAULT NOW();

-- table for stock entries
CREATE TABLE IF NOT EXISTS stock_entries (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL
);

-- table for work orders
CREATE TABLE IF NOT EXISTS work_orders (
  id SERIAL PRIMARY KEY,
  status TEXT NOT NULL
);

-- table for cashbox balance records
CREATE TABLE IF NOT EXISTS cashbox (
  id SERIAL PRIMARY KEY,
  balance NUMERIC(10,2) NOT NULL
);
