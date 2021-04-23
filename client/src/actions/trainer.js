import axios from "axios";
import { ADD_TRAINER, DELETE_TRAINER } from "./types";

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
