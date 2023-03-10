import { filterByName, sortByName, filterByType } from "./data.js";

import data from "./data/pokemon/pokemon.js";
console.log(sortByName(data.pokemon));
//console.log(filterByType(data.pokemon, "grass"));
console.log(filterByName(data.pokemon, "ditto"));
const cardFront = document.querySelector(".card-front-container");

function displayPokemon(pokemonData) {
  pokemonData.pokemon.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
    card.innerHTML = `
      <div class="pokemon-num">#${pokemon.num}</div>
      <img class="pokemon-image" src="${pokemon.img}" alt="${pokemon.name}">
      <div class="pokemon-name">${
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      }</div>
      <div class="pokemon-type">${pokemon.type}</div>
    `;
    cardFront.appendChild(card);
  });
}

displayPokemon(data);
