import { GET_POKEMON } from "../actions/types";

export default function trainer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POKEMON:
      return payload;
    default:
      return state;
  }
}
