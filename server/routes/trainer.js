const express = require("express");
const router = express.Router();

const pool = require("../db/sql");

// @post      Post /api/trainer/add
// @desc      Add a new pokemon
// @access    Public
router.post("/new", (req, res) => {
  const { name } = req.body;

  try {
    pool.getConnection(async (err, connection) => {
      if (err) {
        res.send(err);
        console.log(err);
      }

      connection.query(
        `INSERT INTO Trainers (Name, Pokemon_owned) VALUES ('${name}', '')`,
        (err, rows) => {
          if (err) {
            console.log(err);
            return res.send(err);
          }
          connection.release();

          res.json({ [name]: { name, pokemon: [] } });
        }
      );
    });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

// @delete    Delete /api/trainer/
// @desc      Delete a traienr
// @access    Public
router.delete("/:name", (req, res) => {
  const { name } = req.params;

  try {
    pool.getConnection(async (err, connection) => {
      if (err) {
        res.send(err);
        console.log(err);
      }

      connection.query(
        `DELETE FROM Trainers WHERE Name = ?`,
        name,
        (err, rows) => {
          if (err) {
            console.log(err);
            return res.send(err);
          }

          connection.release();

          res.json({ name });
        }
      );
    });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

module.exports = router;
