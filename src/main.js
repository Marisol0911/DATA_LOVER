import data from "./data/pokemon/pokemon.js";

import {
  filterByName,
  sortByName,
  filterByType,
  sortByCP,
  sortByNameZA,
  sortByNum,
  getNextEvolutions,
} from "./data.js";

//console.log(sortByCP(data.pokemon));
//console.log(sortByName(data.pokemon));
//console.log(filterByType(data.pokemon, "grass"));
//console.log(filterByName(data.pokemon, "ditto"));
//console.log(typeof pokemon.stats["max-cp"]);
//console.log(sortByNum(data.num));

const cardFront = document.querySelector(".card-front-container");
//const cardBack = document.querySelector(".card-back-container");
const cardContainer = document.querySelector("main");
const typeIcons = {
  normal:
    '<article class="type-icon"><img src="/typelogo/normalicon.png" alt="normal"></article>',
  fire: '<article class="type-icon"><img src="/typelogo/fireicon.png" alt="fire"></article>',
  water:
    '<article class="type-icon"><img src="/typelogo/watericon.png" alt="water"></article>',
  electric:
    '<article class="type-icon"><img src="/typelogo/electricicon.png" alt="electric"></article>',
  grass:
    '<article class="type-icon"><img src="/typelogo/grassicon.png" alt="grass"></article>',
  ice: '<article class="type-icon"><img src="/typelogo/iceicon.png" alt="ice"></article>',
  fighting:
    '<article class="type-icon"><img src="/typelogo/fightingicon.png" alt="fighting"></article>',
  poison:
    '<article class="type-icon"><img src="/typelogo/poisonicon.png" alt="poison"></article>',
  ground:
    '<article class="type-icon"><img src="/typelogo/groundicon.png" alt="ground"></article>',
  flying:
    '<article class="type-icon"><img src="/typelogo/flyingicon.png" alt="flying"></article>',
  psychic:
    '<article class="type-icon"><img src="/typelogo/psychicicon.png" alt="psychic"></article>',
  bug: '<article class="type-icon"><img src="/typelogo/bugicon.png" alt="bug"></article>',
  rock: '<article class="type-icon"><img src="/typelogo/rockicon.png" alt="rock"></article>',
  ghost:
    '<article class="type-icon"><img src="/typelogo/ghosticon.png" alt="ghost"></article>',
  dragon:
    '<article class="type-icon"><img src="/typelogo/dragonicon.png" alt="dragon"></article>',
  dark: '<article class="type-icon"><img src="/typelogo/darkicon.png" alt="dark"></article>',
  steel:
    '<article class="type-icon"><img src="/typelogo/steelicon.png" alt="steel"></article>',
  fairy:
    '<article class="type-icon"><img src="/typelogo/fairyicon.png" alt="fairy"></article>',
};

const loadingPage = document.querySelector("#loading");

window.addEventListener("load", () => {
  loadingPage.style.display = "none";
});

function displayPokemon(pokemonData) {
  cardFront.innerHTML = "";
  pokemonData.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
    const typeEmojis = pokemon.type
      .map((type) => `<div class="type-icon">${typeIcons[type]}</div>`)
      .join("");
    card.innerHTML = `
      <article class="pokemon-num">#${pokemon.num}</article>
      <img class="pokemon-image" src="${pokemon.img}" alt="${pokemon.name}">
      <article class="pokemon-name"> ${
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      }</article>
      <article class="pokemon-type">${typeEmojis}</article
      <article class="pokemon-cp">Max CP: ${pokemon.stats["max-cp"]}</article>
      <article class="pokemon-region">Region: ${
        pokemon.generation.name
      }</article>
    `;
    cardFront.appendChild(card);
    card.addEventListener("click", () => {
      const expandedCard = document.createElement("div");
      expandedCard.classList.add("pokemon-card-expanded");
      expandedCard.innerHTML = `
        <img class="pokemon-image-expanded" src="${pokemon.img}" alt="${
        pokemon.name
      }">
        <articleclass="pokemon-info">
          <div article="pokemon-name-expanded">${
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          }</article>
          <article class="pokemon-num">#${pokemon.num}</article>
          <articleclass="pokemon-num">#${pokemon.about}article>
        
          <articleclass="pokemon-region-expanded">Region: ${
            pokemon.generation.name
          }</article>
          <articleclass="pokemon-region-expanded">Height: ${
            pokemon.size.height
          }</article>
          <articleclass="pokemon-region-expanded">Weight: ${
            pokemon.size.weight
          }</article>
          <articleclass="pokemon-egg-expanded">Spawns in eggs: ${
            pokemon.egg === "not in eggs" ? "No" : "Yes"
          }</article>
          <article class="quick-movement-expanded">Quick movement:
            ${pokemon["quick-move"]
              .map((attack) => `<div>${attack.name} (${attack.type})</article>`)
              .join("")}
          </article>
          <article class="special-attack-expanded">Special attack:
            ${pokemon["special-attack"]
              .map((attack) => `<div>${attack.name} (${attack.type})</article>`)
              .join("")}
          </article>
        </article>
      `; //inner html reverse card ends
      if (pokemon.evolution["next-evolution"] !== undefined) {
        console.log(
          getNextEvolutions(pokemon.evolution["next-evolution"], data.pokemon)
        );
      }

      cardFront.style.display = "none";
      cardContainer.appendChild(expandedCard);
      expandedCard.addEventListener("click", () => {
        cardFront.style.display = "grid";
        cardContainer.removeChild(expandedCard);
      });
    });
  });
}

displayPokemon(data.pokemon);

//elementos del dom
const inputName = document.getElementById("btnName");
const selectType = document.querySelector(".type");
const sortName = document.getElementById("bntSort");
const sortName1 = document.getElementById("bntSort2");

// como se ejecuta

function numPokemon() {
  const value = inputName.value;
  const pokemonsFiltered = sortByNum(data.pokemon, value);

  displayPokemon(pokemonsFiltered);
}
inputName.addEventListener("keyup", numPokemon);
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

function sortPokemonByName(event) {
  const orderName = event.target.value;
  const pokemonsSort = sortByName(data.pokemon, orderName);

  displayPokemon(pokemonsSort);
}

function sortPokemonByNam(event) {
  const orderName = event.target.value;
  const pokemonsSort = sortByNameZA(data.pokemon, orderName);

  displayPokemon(pokemonsSort);
}

sortName.addEventListener("click", sortPokemonByName);
sortName1.addEventListener("click", sortPokemonByNam);
