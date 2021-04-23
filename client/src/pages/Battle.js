import React from "react";
import { useHistory } from "react-router-dom";

import BattleField from "../containers/battle/BattleField";

function Battle() {
  const history = useHistory();

  const handleClickBack = () => history.push("/");

  return (
    <div className="battle">
      <h1>Battle Field</h1>
      <button style={{ color: "black" }} onClick={() => handleClickBack()}>
        Back
      </button>
      <BattleField />
    </div>
  );
}

export default Battle;
