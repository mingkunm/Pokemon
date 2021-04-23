import React, { useState } from "react";
import { connect } from "react-redux";

import Pokemons from "../pokemons/Pokemons";
import Popup from "../../components/Popup";
import { deleteTrainer } from "../../actions/trainer";

function Trainer({ name, pokemons, deleteTrainer }) {
  const [deleteTrainerPopup, setDeleteTrainerPopup] = useState(false);

  const handleDeleteTrainer = () => {
    if (pokemons.length > 0) {
      setDeleteTrainerPopup(true);
      return;
    }

    deleteTrainer(name);
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
        <button style={{ backgroundColor: "green" }} className="btn-trainer">
          Add Pokemon
        </button>
        <button
          style={{ backgroundColor: "red" }}
          className="btn-trainer"
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
    </div>
  );
}

export default connect(null, { deleteTrainer })(Trainer);
