import React from "react";
import { useSelector } from "react-redux";

import Trainer from "./Trainer";

function Trainers() {
  const pokemon = useSelector((state) => state.pokemon);
  const trainer = useSelector((state) => state.trainer);

  return (
    <div>
      <h1>Trainers</h1>
      <h4>{JSON.stringify(trainer)}</h4>
      <h4>{JSON.stringify(pokemon)}</h4>
      <br />
      <br />
      <br />
      <br />
      {Object.values(trainer).map(({ name, pokemon }) => (
        <Trainer name={name} pokemons={pokemon} />
      ))}
    </div>
  );
}

export default Trainers;
