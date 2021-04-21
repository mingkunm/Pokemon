const mysql = require("mysql");

// MySQL
const pool = mysql.createPool({
  connectionLimit: 100,
  host: "sql3.freemysqlhosting.net",
  port: 3306,
  user: `${process.env.SQL_USER}`,
  password: `${process.env.SQL_PASSWORD}`,
  database: `${process.env.SQL_DATABASE}`,
  multipleStatements: true,
});

module.exports = pool;
