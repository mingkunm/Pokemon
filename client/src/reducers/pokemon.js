import { GET_POKEMON, ASSIGN_POKEMON } from "../actions/types";

const INITIAL_STATE = {
  arranged: null,
  remaining: [],
};

export default function trainer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POKEMON:
      return {
        ...state,
        arranged: { ...payload.arranged },
        remaining: [...payload.remaining],
      };
    case ASSIGN_POKEMON:
      state.remaining = state.remaining.filter(
        (pokemon) => pokemon.name !== payload.pokemon
      );
      return {
        ...state,
        arranged: {
          ...state.arranged,
          [payload.pokemon]: payload.trainer,
        },
      };
    default:
      return state;
  }
}
