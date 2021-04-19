import axios from "axios";
import { GET_ALL, POST } from "./types";

const API_URL = "http://localhost:5000/api";

export const getAll = () => async (dispatch) => {
  const res = await axios.get(`${API_URL}/main`);

  await dispatch({
    type: GET_ALL,
    payload: res.data,
  });
};

export const post = ({ id, content }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ id, content });
  try {
    const res = await axios.post("/api/post", body, config);
    const payload = res.data;
    dispatch({
      type: POST,
      payload,
    });
  } catch (err) {
    console.log(err);
  }
};
