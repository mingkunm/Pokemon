import React from "react";

import Pokemons from "../pokemons/Pokemons";

function Trainer({ name, pokemons }) {
  return (
    <div className="trainer">
      <h4>{name}</h4>
      <Pokemons pokemons={pokemons} />
    </div>
  );
}

export default Trainer;
