import React from "react";

function Pokemon({ pokemon }) {
  const { name, type, move } = pokemon;

  return (
    <div className="pokemon">
      <div className="avatar-container">
        <img
          src={`https://img.pokemondb.net/artwork/${
            name.charAt(0).toLowerCase() + name.slice(1)
          }.jpg`}
          alt={`${name} img`}
          className="avatar"
        />
      </div>
      <div>
        <h5>Name: {name}</h5>
        <h5>Type: {type}</h5>
        <h5>Move: {move}</h5>
      </div>
    </div>
  );
}

export default Pokemon;
