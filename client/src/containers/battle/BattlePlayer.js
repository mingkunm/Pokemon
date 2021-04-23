import React, { useState } from "react";
import Select from "react-select";

function BattlePlayer({ id, trainer, setBattle }) {
  const [selectTrainer, setSelectTrainer] = useState(null);
  const [selectPokemon, setSelectPokemon] = useState(null);

  const handleSelectPokemon = (selectedOption) => {
    setSelectPokemon(selectedOption);

    setBattle((preState) => {
      return { ...preState, [id]: selectedOption.value };
    });
  };

  return (
    <div>
      <h1>Trainer {id}</h1>
      <Select
        onChange={(selectedOption) => {
          setSelectTrainer(selectedOption);
          setSelectPokemon(null);
          setBattle((preState) => {
            return { ...preState, [id]: undefined };
          });
        }}
        value={selectTrainer}
        options={
          trainer &&
          Object.keys(trainer).map((key) => ({
            value: key,
            label: key,
          }))
        }
        placeholder="Trainer"
        className="battle-select"
      />
      {selectTrainer && (
        <Select
          onChange={(selectedOption) => handleSelectPokemon(selectedOption)}
          value={selectPokemon}
          options={trainer[selectTrainer.value].pokemon.map((p) => ({
            value: p.type,
            label: p.name,
          }))}
          placeholder="Pokemon"
          className="battle-select"
        />
      )}
      {selectPokemon && (
        <img
          src={`https://img.pokemondb.net/artwork/${
            selectPokemon.label.charAt(0).toLowerCase() +
            selectPokemon.label.slice(1)
          }.jpg`}
          alt={`${selectPokemon.label} img`}
          className="battle-avatar"
        />
      )}
    </div>
  );
}

export default BattlePlayer;
