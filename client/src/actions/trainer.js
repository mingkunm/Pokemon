import axios from "axios";
import { ADD_TRAINER } from "./types";

let api = "/api/";

if (window.location.hostname.indexOf("localhost") >= 0) {
  api = "http://localhost:5000/api/";
}

export const addNewTrainer = (name) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name });

  console.log(name);

  // try {
  //   const res = await axios.post(`${api}post`, body, config);
  //   const payload = res.data;
  //   dispatch({
  //     type: POST,
  //     payload,
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
};
