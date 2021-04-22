import { combineReducers } from "redux";
import trainerReducer from "./trainer";
import pokemonReducer from "./pokemon";

const rootReducer = combineReducers({
  trainer: trainerReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;
