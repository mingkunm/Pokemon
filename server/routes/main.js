const express = require("express");

const router = express.Router();
const pool = require("../db/sql");

// @route      Get /api
// @desc       Get all pokemons and trainers
// @access     Public
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

const manageGetData = (_pokemon, _trainer) => {
  const pokemon = {};
  const pokemonMap = {};
  const main = {};
  const pokemonArrange = {};

  _pokemon.forEach((item) => {
    const { ID, Name, Move, Type } = item;

    pokemon[ID] = {
      name: Name,
      move: Move,
      type: Type,
    };

    pokemonMap[ID] = Name;
    pokemonArrange[Name] = false;
  });

  _trainer.forEach((item) => {
    main[item.Name] = {};
    main[item.Name].pokemon = {};

    item.Pokemon_owned.split(",").forEach((id) => {
      main[item.Name].pokemon[id] = pokemon[id];

      pokemonArrange[pokemonMap[id]] = true;
    });
  });

  return { main, pokemonArrange };
};

module.exports = router;
