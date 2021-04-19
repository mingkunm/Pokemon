const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Getting");
  return res.send("Hello from express!");
});

module.exports = router;
