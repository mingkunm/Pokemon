const express = require("express");

const router = express.Router();
const pool = require("../db/sql");

router.get("/", (req, res) => {
  // pool.getConnection((err, connection) => {
  //   if (err) console.log(err);
  //   console.log(`connected as id ${connection.threadId}`);
  // });

  return res.send("Hello from express!");
});

module.exports = router;
