import React from "react";
import { useSelector } from "react-redux";

function Search({ trainer, setSearchResults }) {
  const pokemonTrainer = useSelector((state) => state.pokemon.arranged);

  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();

    if (!input) {
      setSearchResults(trainer);
    } else {
      const result = {};

      // Check if trainer name match input
      Object.keys(trainer).forEach((key) => {
        if (key.toLowerCase().includes(input)) {
          result[key] = trainer[key];
        }
      });

      // Check if pokemon name match input
      Object.keys(pokemonTrainer).forEach((key) => {
        if (key.toLowerCase().includes(input)) {
          if (!result[pokemonTrainer[key]]) {
            result[pokemonTrainer[key]] = trainer[pokemonTrainer[key]];
          }
        }
      });

      setSearchResults(result);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter trainer name or pokemon name"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}

export default Search;
