import { GET_TRAINER, ADD_TRAINER, DELETE_TRAINER } from "../actions/types";

export default function trainer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TRAINER:
      return payload;
    case ADD_TRAINER:
      return { ...state, ...payload };
    case DELETE_TRAINER:
      delete state[payload];
      return { ...state };
    default:
      return state;
  }
}
