import React, { useState } from "react";
import { useSelector } from "react-redux";

import Trainer from "./Trainer";
import Popup from "../../components/Popup";

function Trainers() {
  const trainer = useSelector((state) => state.trainer);

  const [popup, setPopup] = useState(false);

  return (
    <div className="trainers">
      {Object.values(trainer).map(({ name, pokemon }, index) => (
        <Trainer name={name} pokemons={pokemon} key={index} />
      ))}
      <button
        style={{
          marginTop: "50px",
          background: "red",
          color: "white",
        }}
        onClick={() => setPopup(true)}
      >
        Add new trainer
      </button>

      <Popup trigger={popup} setTrigger={setPopup} title="Add new trainer">
        <input type="text" placeholder="Trainer name" />
        <button
          className="btn-confirm"
          style={{
            width: "100%",
            marginTop: "30px",
          }}
        >
          Confirm
        </button>
      </Popup>
    </div>
  );
}

export default Trainers;
