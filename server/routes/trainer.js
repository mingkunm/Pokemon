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

// @post      Post /api/trainer/addPokemon
// @desc      Add a pokemon to trainer
// @access    Public
router.post("/addPokemon", (req, res) => {
  const { trainer, pokemonId } = req.body;

  try {
    pool.getConnection(async (err, connection) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }

      connection.query(`SELECT * from Trainers`, (err, trainers) => {
        if (err) {
          console.log(err);
          return res.send(err);
        }

        // Check if pokomon has been assigned
        for (const t of trainers) {
          if (t.Pokemon_owned.length > 0) {
            const ids = t.Pokemon_owned.split(",");
            for (const id of ids) {
              if (parseInt(id) === parseInt(pokemonId)) {
                connection.release();

                return res.json({ Refresh: true });
              }
            }
          }
        }

        // Add new pokemon to traienr
        let newOwned;
        for (const t of trainers) {
          if (t.Name === trainer) {
            newOwned = t.Pokemon_owned + `,${pokemonId}`;
            break;
          }
        }
        connection.query(
          `UPDATE Trainers SET Pokemon_owned = '${newOwned}' WHERE Trainers.Name = '${trainer}'`,
          (err) => {
            if (err) {
              console.log(err);
              return res.send(err);
            }
          }
        );

        // Return assigned pokemon
        connection.query(
          `SELECT * FROM Pokemon WHERE ID = ${pokemonId}`,
          (err, assignedPokemon) => {
            connection.release();

            if (err) {
              console.log(err);
              return res.send(err);
            }

            return res.json({ assignedPokemon });
          }
        );
      });
    });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

// @post      Post /api/trainer/releasePokemon
// @desc      Release a pokemon from a trainer
// @access    Public
router.post("/releasePokemon", (req, res) => {
  const { trainer, pokemonId } = req.body;

  try {
    pool.getConnection(async (err, connection) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }

      connection.query(
        `SELECT Pokemon_owned from Trainers WHERE Name = '${trainer}'`,
        (err, _oldOwned) => {
          if (err) {
            console.log(err);
            return res.send(err);
          }

          const oldOwned = _oldOwned[0].Pokemon_owned;
          const newOwned = oldOwned
            .split(",")
            .filter((id) => parseInt(id) !== parseInt(pokemonId))
            .join(",");

          connection.query(
            `UPDATE Trainers SET Pokemon_owned = '${newOwned}' WHERE Trainers.Name = '${trainer}'`,
            (err) => {
              if (err) {
                console.log(err);
                return res.send(err);
              }

              connection.release();

              return res.status(200).send("Successfully released!");
            }
          );
        }
      );
    });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

module.exports = router;
