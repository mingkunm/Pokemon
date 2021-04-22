const express = require("express");

const router = express.Router();
const pool = require("../db/sql");

// @post      Get /api/pokemon/add
// @desc      Add a new pokemon
// @access    Public
router.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.send(err);
      console.log(err);
    }

    connection.query(`SELECT * from Pokemon`, (err, rows1) => {
      if (err) {
        res.send(err);
        console.log(err);
      }

      const pokemons = rows1;

      connection.query(`SELECT * from Trainers`, (err, rows2) => {
        if (err) {
          res.send(err);
          console.log(err);
        }

        const trainers = rows2;

        connection.release();

        const { main, pokemonArrange } = manageGetData(pokemons, trainers);

        res.json({ main, pokemonArrange });
      });
    });
  });
});

const getAllPokemon = async () => {};

module.exports = router;
