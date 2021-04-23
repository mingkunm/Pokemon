import React from "react";

import Pokemon from "./Pokemon";

function Pokemons({ pokemons }) {
  return (
    <div className="pokemons">
      {Object.keys(pokemons).length > 0 ? (
        pokemons.map((pokemon, index) => (
          <Pokemon pokemon={pokemon} key={index} />
        ))
      ) : (
        <div style={{ marginTop: "50px" }}>{`No pokemon yet :)`}</div>
      )}
    </div>
  );
}

export default Pokemons;
