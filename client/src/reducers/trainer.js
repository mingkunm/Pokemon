import {
  GET_TRAINER,
  ADD_TRAINER,
  DELETE_TRAINER,
  ADD_POKEMON_TO_TRAINER,
  REMOVE_POKEMON_FROM_TRAINER,
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
    case ADD_POKEMON_TO_TRAINER:
      return {
        ...state,
        [payload.name]: {
          ...state[payload.name],
          pokemon: [...state[payload.name].pokemon, payload.assignedPokemon],
        },
      };
    case REMOVE_POKEMON_FROM_TRAINER:
      return {
        ...state,
        [payload.trainer]: {
          ...state[payload.trainer],
          pokemon: state[payload.trainer].pokemon.filter(
            (p) => parseInt(p.id) !== payload.pokemonId
          ),
        },
      };
    default:
      return state;
  }
}
