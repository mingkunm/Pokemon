import React from "react";

import Pokemon from "./Pokemon";

function Pokemons({ pokemons }) {
  return (
    <div className="pokemons">
      {Object.keys(pokemons).length > 0
        ? pokemons.map((pokemon, index) => (
            <Pokemon pokemon={pokemon} key={index} />
          ))
        : "No pokemon yet :)"}
    </div>
  );
}

export default Pokemons;
