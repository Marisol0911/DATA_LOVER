import data from "./data/pokemon/pokemon.js";

import {
  filterByName,
  sortByName,
  filterByType,
  sortByDescCP,
  sortByAscCP,
  sortByNameZA,
  filterByRarity,
  filterByRegion,
} from "./data.js";

//console.log(sortByAscCP(data.pokemon));
//console.log(sortByName(data.pokemon));
//console.log(filterByType(data.pokemon, "grass"));
//console.log(filterByName(data.pokemon, "ditto"));
//console.log(typeof pokemon.stats["max-cp"]);
//console.log(filterByRegion(data.pokemon, "johto"));

const cardFront = document.querySelector(".card-front-container");
//const cardBack = document.querySelector(".card-back-container");
const cardContainer = document.querySelector("main");
const typeIcons = {
  normal:
    '<article class="type-icon"><img src="/src/typelogo/normalicon.png" alt="normal"></article>',
  fire: '<article class="type-icon"><img src="/src/typelogo/fireicon.png" alt="fire"></article>',
  water:
    '<article class="type-icon"><img src="/src/typelogo/watericon.png" alt="water"></article>',
  electric:
    '<article class="type-icon"><img src="/src/typelogo/electricicon.png" alt="electric"></article>',
  grass:
    '<article class="type-icon"><img src="/src/typelogo/grassicon.png" alt="grass"></article>',
  ice: '<article class="type-icon"><img src="/src/typelogo/iceicon.png" alt="ice"></article>',
  fighting:
    '<article class="type-icon"><img src="/src/typelogo/fightingicon.png" alt="fighting"></article>',
  poison:
    '<article class="type-icon"><img src="/src/typelogo/poisonicon.png" alt="poison"></article>',
  ground:
    '<article class="type-icon"><img src="/src/typelogo/groundicon.png" alt="ground"></article>',
  flying:
    '<article class="type-icon"><img src="/src/typelogo/flyingicon.png" alt="flying"></article>',
  psychic:
    '<article class="type-icon"><img src="/src/typelogo/psychicicon.png" alt="psychic"></article>',
  bug: '<article class="type-icon"><img src="/src/typelogo/bugicon.png" alt="bug"></article>',
  rock: '<article class="type-icon"><img src="/src/typelogo/rockicon.png" alt="rock"></article>',
  ghost:
    '<article class="type-icon"><img src="/src/typelogo/ghosticon.png" alt="ghost"></article>',
  dragon:
    '<article class="type-icon"><img src="/src/typelogo/dragonicon.png" alt="dragon"></article>',
  dark: '<article class="type-icon"><img src="/src/typelogo/darkicon.png" alt="dark"></article>',
  steel:
    '<article class="type-icon"><img src="/src/typelogo/steelicon.png" alt="steel"></article>',
  fairy:
    '<article class="type-icon"><img src="/src/typelogo/fairyicon.png" alt="fairy"></article>',
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
      <div class="pokemon-num">#${pokemon.num}</div>
      <img class="pokemon-image" src="${pokemon.img}" alt="${pokemon.name}">
      <div class="pokemon-name"> ${
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      }</div>
      <div class="pokemon-type">${typeEmojis}</div>
      <div class="pokemon-cp">Max CP: ${pokemon.stats["max-cp"]}</div>
      <div class="pokemon-region">Region: ${pokemon.generation.name}</div>
    `;
    cardFront.appendChild(card);
    card.addEventListener("click", () => {
      const expandedCard = document.createElement("div");
      expandedCard.classList.add("pokemon-card-expanded");
      expandedCard.innerHTML = `
        <img class="pokemon-image-expanded" src="${pokemon.img}" alt="${
        pokemon.name
      }">
        <div class="pokemon-info">
          <div class="pokemon-name-expanded">${
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          }</div>
          <div class="pokemon-region-expanded">Region: ${
            pokemon.generation.name
          }</div>
          <div class="pokemon-egg-expanded">Spawns in eggs: ${
            pokemon.egg === "not in eggs" ? "No" : "Yes"
          }</div>
          <div class="quick-movement-expanded">Quick movement:
            ${pokemon["quick-move"]
              .map((attack) => `<div>${attack.name} (${attack.type})</div>`)
              .join("")}
          </div>
          <div class="special-attack-expanded">Special attack:
            ${pokemon["special-attack"]
              .map((attack) => `<div>${attack.name} (${attack.type})</div>`)
              .join("")}
          </div>
        </div>
      `; //inner html reverse card ends
      cardFront.style.display = "none";
      //cardBack.style.display = "none";
      cardContainer.appendChild(expandedCard);
      expandedCard.addEventListener("click", () => {
        cardFront.style.display = "grid";
        //cardBack.style.display = "grid";
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
const sortCP = document.querySelector(".sort-by");
const filterRarity = document.querySelector(".rarity");
const filterRegion = document.querySelector(".region");

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

function manageRegionSelect(event) {
  const selectedRegion = event.target.value;
  const filteredPokemonRegion = filterByRegion(data.pokemon, selectedRegion);

  displayPokemon(filteredPokemonRegion);
}
filterRegion.addEventListener("change", manageRegionSelect);

function manageRaritySelect(event) {
  const selectedRarity = event.target.value;
  const filteredPokemonRarity = filterByRarity(data.pokemon, selectedRarity);

  displayPokemon(filteredPokemonRarity);
}
filterRarity.addEventListener("change", manageRaritySelect);

function manageSortSelect(event) {
  const selectedSort = event.target.value;
  let sortedPokemon;
  if (selectedSort === "A-Z") {
    sortedPokemon = sortByName(data.pokemon);
  } else if (selectedSort === "Z-A") {
    sortedPokemon = sortByNameZA(data.pokemon);
  } else if (selectedSort === "desc") {
    sortedPokemon = sortByDescCP(data.pokemon);
  } else if (selectedSort === "asc") {
    sortedPokemon = sortByAscCP(data.pokemon);
  } else {
    sortedPokemon = data.pokemon;
  }
  displayPokemon(sortedPokemon);
}
sortCP.addEventListener("change", manageSortSelect);

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

//selectType.addEventListener("change", OrderPokemonByType);
const showBackToTopOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showBackToTopOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});
const goToTop = () => {
  document.body.scrollIntoView();
  behavior: "smooth";
};
backToTopButton.addEventListener("click", goToTop);
