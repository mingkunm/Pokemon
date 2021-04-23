import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import Select from "react-select";

import Pokemons from "../pokemons/Pokemons";
import Popup from "../../components/Popup";
import { deleteTrainer, addPokemonToTrainer } from "../../actions/trainer";

function Trainer({ name, pokemons, deleteTrainer, addPokemonToTrainer }) {
  const pokemon = useSelector((state) => state.pokemon);
  console.log(pokemon);

  const [deleteTrainerPopup, setDeleteTrainerPopup] = useState(false);
  const [addPokemonSelect, setAddPokemonSelect] = useState(null);
  const [addPokemonPopup, setAddPokemonPopup] = useState(false);

  const handleDeleteTrainer = () => {
    if (pokemons.length > 0) {
      setDeleteTrainerPopup(true);
      return;
    }

    deleteTrainer(name);
  };

  const handleAddPokemon = () => {
    addPokemonToTrainer(name, addPokemonSelect.value);
    setAddPokemonPopup(false);
  };

  return (
    <div className="trainer">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4>{name}</h4>
        <button
          className="btn-trainer btn-confirm"
          onClick={() => {
            setAddPokemonSelect(null);
            setAddPokemonPopup(true);
          }}
        >
          Add Pokemon
        </button>
        <button
          className="btn-trainer btn-cancel"
          onClick={() => handleDeleteTrainer()}
        >
          Delete Trainer
        </button>
      </div>
      <Pokemons pokemons={pokemons} />

      {/* Delete trainer fail popup */}
      <Popup
        trigger={deleteTrainerPopup}
        setTrigger={setDeleteTrainerPopup}
        title="Delete Trainer Fail!"
      >
        <h5>You must release all pokemons belong to current trainer first!</h5>
      </Popup>

      {/* Add pokemon to trainer popup */}
      <Popup
        trigger={addPokemonPopup}
        setTrigger={setAddPokemonPopup}
        title={`Add a pokemon to ${name}`}
      >
        <Select
          onChange={(selectedOption) => setAddPokemonSelect(selectedOption)}
          value={addPokemonSelect}
          options={pokemon.remaining.map((item) => ({
            value: item.id,
            label: item.name,
          }))}
        />
        <button
          className="btn-confirm"
          style={{
            width: "100%",
            marginTop: "30px",
          }}
          onClick={() => handleAddPokemon()}
        >
          Add
        </button>
      </Popup>
    </div>
  );
}

export default connect(null, { deleteTrainer, addPokemonToTrainer })(Trainer);
