import { example } from "./data.js";
import pokemon from "./data/pokemon/pokemon.js";
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
const cardFront = document.querySelector(".card-front-container");

function displayPokemon(pokemonData) {
  pokemonData.pokemon.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
    card.innerHTML = `
      <div class="pokemon-num">#${pokemon.num}</div>
      <img class="pokemon-image" src="${pokemon.img}" alt="${pokemon.name}">
      <div class="pokemon-name">${pokemon.name}</div>
      <div class="pokemon-type">${pokemon.type}</div>
    `;
    cardFront.appendChild(card);
  });
}

let len = pokemon.pokemon.length;
console.log(len);
pokemon.pokemon.forEach((pokemon) => {
  console.log(pokemon.name);
});
displayPokemon(pokemon);
