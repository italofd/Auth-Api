const dotenv = require("dotenv");
const { Client } = require("pg");

dotenv.config();
const client = new Client({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  port: process.env.PG_PORT,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

client.connect();

module.exports = client;
