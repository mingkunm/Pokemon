import axios from "axios";
import {
  ADD_TRAINER,
  DELETE_TRAINER,
  GET_POKEMON,
  GET_TRAINER,
  UPDATE_TRAINER,
  ASSIGN_POKEMON,
} from "./types";

let api = "/api/";

if (window.location.hostname.indexOf("localhost") >= 0) {
  api = "http://localhost:5000/api/";
}

export const addTrainer = (name) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name });

  try {
    const res = await axios.post(`${api}trainer/new`, body, config);

    await dispatch({
      type: ADD_TRAINER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTrainer = (name) => async (dispatch) => {
  try {
    const res = await axios.delete(`${api}trainer/${name}`);

    await dispatch({
      type: DELETE_TRAINER,
      payload: res.data.name,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addPokemonToTrainer = (trainer, pokemonId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ trainer, pokemonId });

  try {
    const res = await axios.post(`${api}trainer/addPokemon`, body, config);

    if (res.data.Refresh) {
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
    } else {
      const _assignedPokemon = res.data.assignedPokemon[0];
      const assignedPokemon = {};
      Object.keys(_assignedPokemon).forEach((key) => {
        assignedPokemon[key.toLowerCase()] = _assignedPokemon[key];
      });

      await dispatch({
        type: UPDATE_TRAINER,
        payload: { name: trainer, assignedPokemon },
      });

      await dispatch({
        type: ASSIGN_POKEMON,
        payload: { trainer, pokemon: assignedPokemon.name },
      });
    }
  } catch (err) {
    console.log(err);
  }
};
