import React from "react";

import Pokemons from "../pokemons/Pokemons";

function Trainer({ name, pokemons }) {
  return (
    <div>
      <h4>{JSON.stringify(name)}</h4>
      <Pokemons pokemons={pokemons} />
    </div>
  );
}

export default Trainer;
