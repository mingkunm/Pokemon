import axios from "axios";
import { GET_POKEMON, GET_TRAINER } from "./types";

let api = "/api/";

if (window.location.hostname.indexOf("localhost") >= 0) {
  api = "http://localhost:5000/api/";
}

export const getAll = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api}`);

    console.log(res);

    await dispatch({
      type: GET_TRAINER,
      payload: res.data.trainer,
    });

    await dispatch({
      type: GET_POKEMON,
      payload: res.data.pokemon,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const post = ({ id, content }) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   const body = JSON.stringify({ id, content });
//   try {
//     const res = await axios.post(`${api}post`, body, config);
//     const payload = res.data;
//     dispatch({
//       type: POST,
//       payload,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
