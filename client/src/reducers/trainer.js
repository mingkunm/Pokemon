import {
  GET_TRAINER,
  ADD_TRAINER,
  DELETE_TRAINER,
  UPDATE_TRAINER,
} from "../actions/types";

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
    case UPDATE_TRAINER:
      console.log(payload);

      return {
        ...state,
        [payload.name]: {
          ...state[payload.name],
          pokemon: [...state[payload.name].pokemon, payload.assignedPokemon],
        },
      };
    default:
      return state;
  }
}
