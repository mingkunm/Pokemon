import React from "react";

import Pokemon from "./Pokemon";

function Pokemons({ pokemons }) {
  return (
    <div className="pokemons">
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Pokemons;
