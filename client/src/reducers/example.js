import { GET_ALL } from "../actions/types";

const INITIAL_STATE = {};

export default function main(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL:
      return { ...state, payload };
    default:
      return state;
  }
}
