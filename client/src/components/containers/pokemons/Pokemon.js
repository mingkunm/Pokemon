import React from "react";

function Pokemon({ pokemon }) {
  const { name, type, move } = pokemon;

  return (
    <div className="pokemon">
      <h5>Name: {name}</h5>
      <h5>Type: {type}</h5>
      <h5>Move: {move}</h5>
    </div>
  );
}

export default Pokemon;
