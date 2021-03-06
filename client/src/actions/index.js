import axios from "axios";
import { GET_POKEMON, GET_TRAINER } from "./types";

let api = "/api/";

if (window.location.hostname.indexOf("localhost") >= 0) {
  api = "http://localhost:5000/api/";
}

export const getAll = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api}`);

    await dispatch({
      type: GET_TRAINER,
      payload: res.data.trainer,
    });

    await dispatch({
      type: GET_POKEMON,
      payload: {
        arranged: { ...res.data.arrangedPokemon },
        remaining: [...res.data.remainingPokemon],
      },
    });
  } catch (err) {
    console.log(err);
  }
};
