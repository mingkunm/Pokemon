import React from "react";
import { useSelector } from "react-redux";

import Trainer from "./Trainer";

function Trainers() {
  const trainer = useSelector((state) => state.trainer);

  return (
    <div className="trainers">
      {Object.values(trainer).map(({ name, pokemon }) => (
        <Trainer name={name} pokemons={pokemon} />
      ))}
    </div>
  );
}

export default Trainers;
