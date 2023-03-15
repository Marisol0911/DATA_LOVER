import { filterByName, sortByName, filterByType } from "./data.js";

import data from "./data/pokemon/pokemon.js";

const cardFront = document.querySelector(".card-front-container");

function displayPokemon(pokemonData) {
  cardFront.innerHTML = "";
  pokemonData.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
    card.innerHTML = `
      <div class="pokemon-num">#${pokemon.num}</div>
      <img class="pokemon-image" src="${pokemon.img}" alt="${pokemon.name}">
      <div class="pokemon-name"> ${
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      }</div>
      <div class="pokemon-type">${pokemon.type}</div>
    `;
    cardFront.appendChild(card);
  });
}

displayPokemon(data.pokemon);

//elementos del dom
const inputName = document.getElementById("btnName");
const selectType = document.querySelector(".type");
const selectOrder = document.querySelector(".order");

// como se ejecuta
function searchPokemon() {
  const value = inputName.value;
  const pokemonsFiltered = filterByName(data.pokemon, value);

  displayPokemon(pokemonsFiltered);
}

inputName.addEventListener("keyup", searchPokemon);

function filterPokemonByType(event) {
  const selectedType = event.target.value;

  const pokemonsFiltered = filterByType(data.pokemon, selectedType);

  displayPokemon(pokemonsFiltered);
}

selectType.addEventListener("change", filterPokemonByType);

function OrderPokemonByType(event) {
  const selectedOrder = event.target.value;

  const pokemonsFiltered = sortByName(data.pokemon, selectedOrder);

  displayPokemon(pokemonsFiltered);
}

selectType.addEventListener("change", OrderPokemonByType);
