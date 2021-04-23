import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";

import Trainer from "./Trainer";
import Popup from "../../components/Popup";
import Search from "../../components/Search";
import { addTrainer } from "../../actions/trainer";

function Trainers({ addTrainer }) {
  const trainer = useSelector((state) => state.trainer);

  const [trainerList, setTrainerList] = useState(trainer);
  const [popup, setPopup] = useState(false);
  const [newTrainerName, setNewTrainerName] = useState("");
  const [newTrainerNameCheck, setNewTrainerNameCheck] = useState(false);

  useEffect(() => {
    setTrainerList(trainer);
  }, [trainer]);

  const handleAddNewTrainer = () => {
    for (const [key] of Object.entries(trainer)) {
      if (key.toLowerCase() === newTrainerName.toLowerCase()) {
        setNewTrainerNameCheck(true);
        return;
      }
    }

    if (!newTrainerNameCheck) {
      addTrainer(newTrainerName);
      setPopup(false);
    }
  };

  return (
    <div className="trainers">
      <Search trainer={trainer} setSearchResults={setTrainerList} />
      {Object.keys(trainerList).length > 0 ? (
        Object.values(trainerList).map(({ name, pokemon }, index) => (
          <Trainer name={name} pokemons={pokemon} key={index} />
        ))
      ) : (
        <div style={{ marginTop: "50px" }}>No Trainers :(</div>
      )}
      <button
        style={{
          marginTop: "50px",
          background: "red",
          color: "white",
        }}
        onClick={() => setPopup(true)}
      >
        Add New Trainer
      </button>

      <Popup trigger={popup} setTrigger={setPopup} title="Add new trainer">
        <input
          type="text"
          placeholder="Trainer name"
          onChange={(e) => {
            setNewTrainerNameCheck(false);
            setNewTrainerName(e.target.value);
          }}
        />
        {newTrainerNameCheck && (
          <span style={{ color: "red" }}>Trainer exists!</span>
        )}

        <button
          className="btn-confirm"
          style={{
            width: "100%",
            marginTop: "30px",
          }}
          onClick={() => handleAddNewTrainer()}
        >
          Confirm
        </button>
      </Popup>
    </div>
  );
}

export default connect(null, { addTrainer })(Trainers);
