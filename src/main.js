import { filterByName, sortByName, filterByType } from "./data.js";

import data from "./data/pokemon/pokemon.js";

const cardFront = document.querySelector(".card-front-container");
const cardBack = document.querySelector(".card-back-container");

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
    const cardReverse = document.createElement("div");
    cardReverse.classList.add("pokemon-card-reverse");
    cardReverse.innerHTML = `
      <div class="pokemon-num">#${pokemon.num}</div>
      <img class="pokemon-image" src="${pokemon.img}" alt="${pokemon.name}">
      <div class="pokemon-name">${pokemon.name}</div>
      <div class="pokemon-region">${pokemon.generation.name}</div>
      `;
    cardFront.appendChild(card);
    cardBack.appendChild(cardReverse);
  });
}
displayPokemon(data);
