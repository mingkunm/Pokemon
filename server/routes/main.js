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

        // const { traienr = main, pokemon = pokemonArrange } = manageGetData(
        //   pokemons,
        //   trainers
        // );

        const { main, pokemonArrange } = manageGetData(pokemons, trainers);
        const trainer = main;
        const pokemon = pokemonArrange;

        res.json({ trainer, pokemon });
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
      id: ID,
      type: Type,
      move: Move,
    };

    pokemonMap[ID] = Name;
  });

  _trainer.forEach((trainer) => {
    trainerName = trainer.Name;
    main[trainerName] = {};
    main[trainerName].name = trainerName;
    main[trainerName].pokemon = [];

    trainer.Pokemon_owned.split(",").forEach((id) => {
      main[trainerName].pokemon.push(pokemon[id]);

      pokemonArrange[pokemonMap[id]] = trainerName;
    });
  });

  return { main, pokemonArrange };
};

module.exports = router;
