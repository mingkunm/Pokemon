import React from "react";
import { useHistory } from "react-router-dom";

import Trainers from "../containers/trainers/Trainers";

function Home() {
  const history = useHistory();

  const handleClickBattle = () => history.push("/battle");

  return (
    <>
      <button
        className="btn-confirm"
        style={{
          marginBottom: "20px",
        }}
        onClick={() => handleClickBattle()}
      >
        Battle!
      </button>
      <Trainers />
    </>
  );
}

export default Home;
