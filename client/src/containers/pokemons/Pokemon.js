import React from "react";
import { connect, useSelector } from "react-redux";

import { releasePokemonFromTrainer } from "../../actions/trainer";

function Pokemon({ pokemon, releasePokemonFromTrainer }) {
  const arrangedPokemon = useSelector((state) => state.pokemon).arranged;

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
        <button
          className="btn-cancel"
          style={{
            padding: "5px",
            marginTop: "5px",
          }}
          onClick={() =>
            releasePokemonFromTrainer(arrangedPokemon[name], pokemon)
          }
        >
          Release
        </button>
      </div>
      <div>
        <h5>Name: {name}</h5>
        <h5>Type: {type}</h5>
        <h5>Move: {move}</h5>
      </div>
    </div>
  );
}

export default connect(null, { releasePokemonFromTrainer })(Pokemon);
