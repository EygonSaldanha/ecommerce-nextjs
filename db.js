import { Pool } from "pg";

require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

export const query = async (text, params) => {
  const res = await pool.query(text, params);
  return res;
};
