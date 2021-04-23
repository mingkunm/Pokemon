import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import BattlePlayer from "./BattlePlayer";

function BattleField() {
  const trainer = useSelector((state) => state.trainer);

  const [battlePlayer, setBattlePlayer] = useState({});
  const [ready, setReady] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleBattle = () => {
    if (battlePlayer[1] === battlePlayer[2]) {
      // Draw
      setWinner(0);
    } else if (
      (battlePlayer[1] === "Fire" && battlePlayer[2] === "Grass") ||
      (battlePlayer[1] === "Grass" && battlePlayer[2] === "Water") ||
      (battlePlayer[1] === "Water" && battlePlayer[2] === "Fire")
    ) {
      // Trainer 1 Win
      setWinner(1);
    } else {
      // Trainer 2 Win
      setWinner(2);
    }
  };

  useEffect(() => {
    if (battlePlayer[1] && battlePlayer[2]) {
      setReady(true);
    } else {
      setReady(false);
    }

    setWinner(null);
  }, [battlePlayer]);

  return (
    <div className="battle-field">
      <BattlePlayer id={1} trainer={trainer} setBattle={setBattlePlayer} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {ready && (
          <button className="btn-confirm" onClick={() => handleBattle()}>
            Battle Now
          </button>
        )}
        {winner === 0 && <div className="battle-result">Draw :)</div>}
        {winner > 0 && (
          <div className="battle-result">Trainer {winner} win !!</div>
        )}
      </div>
      <BattlePlayer id={2} trainer={trainer} setBattle={setBattlePlayer} />
    </div>
  );
}

export default BattleField;
