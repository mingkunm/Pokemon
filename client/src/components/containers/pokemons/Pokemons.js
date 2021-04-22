import React from "react";

function Pokemons({ pokemons }) {
  return (
    <div>
      <div>
        {pokemons.map((pokemon) => (
          <div>
            <h5>name: {pokemon.name}</h5>
            <h5>type: {pokemon.type}</h5>
            <h5>move: {pokemon.move}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokemons;
