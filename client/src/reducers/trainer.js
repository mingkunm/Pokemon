import { GET_TRAINER } from "../actions/types";

export default function trainer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TRAINER:
      return payload;
    default:
      return state;
  }
}
