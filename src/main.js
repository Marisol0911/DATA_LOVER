import data from "./data/pokemon/pokemon.js";

import {
  filterByName,
  sortByName,
  filterByType,
  sortByNum,
  sortByCP,
  filterByRarity,
  filterByRegion,
  calculateAverageSpawnChance,
  //anidatedFilters,
} from "./data.js";

const averageSpawnChance = calculateAverageSpawnChance(data)
const cardFront = document.querySelector(".card-front-container");
const cardContainer = document.querySelector("main");
const typeIcons = {
  normal:
    '<article class="type-icon"><img src="typelogo/normalicon.png" alt="normal"></article>',
  fire: '<article class="type-icon"><img src="typelogo/fireicon.png" alt="fire"></article>',
  water:
    '<article class="type-icon"><img src="typelogo/watericon.png" alt="water"></article>',
  electric:
    '<article class="type-icon"><img src="typelogo/electricicon.png" alt="electric"></article>',
  grass:
    '<article class="type-icon"><img src="typelogo/grassicon.png" alt="grass"></article>',
  ice: '<article class="type-icon"><img src="typelogo/iceicon.png" alt="ice"></article>',
  fighting:
    '<article class="type-icon"><img src="typelogo/fightingicon.png" alt="fighting"></article>',
  poison:
    '<article class="type-icon"><img src="typelogo/poisonicon.png" alt="poison"></article>',
  ground:
    '<article class="type-icon"><img src="typelogo/groundicon.png" alt="ground"></article>',
  flying:
    '<article class="type-icon"><img src="typelogo/flyingicon.png" alt="flying"></article>',
  psychic:
    '<article class="type-icon"><img src="typelogo/psychicicon.png" alt="psychic"></article>',
  bug: '<article class="type-icon"><img src="typelogo/bugicon.png" alt="bug"></article>',
  rock: '<article class="type-icon"><img src="typelogo/rockicon.png" alt="rock"></article>',
  ghost:
    '<article class="type-icon"><img src="typelogo/ghosticon.png" alt="ghost"></article>',
  dragon:
    '<article class="type-icon"><img src="typelogo/dragonicon.png" alt="dragon"></article>',
  dark: '<article class="type-icon"><img src="typelogo/darkicon.png" alt="dark"></article>',
  steel:
    '<article class="type-icon"><img src="typelogo/steelicon.png" alt="steel"></article>',
  fairy:
    '<article class="type-icon"><img src="typelogo/fairyicon.png" alt="fairy"></article>',
};

const loadingPage = document.querySelector("#loading");
window.addEventListener("load", () => {
  loadingPage.style.display = "none";
});

function spawnChanceColor(spawnChance, averageSpawnChance) {
  if (spawnChance === null || spawnChance === "null" || spawnChance === 0 || spawnChance === "0") {
    return { className: "spawn-bar spawn-bar-null", text: "Null" };
  } else if (spawnChance < averageSpawnChance * 0.9) {
    return { className: "spawn-bar spawn-bar-low", text: "Low" };
  } else if (
    spawnChance < averageSpawnChance * 1.2 &&
    spawnChance >= averageSpawnChance * 0.9
  ) {
    return { className: "spawn-bar spawn-bar-medium", text: "Medium" };
  } else {
    return { className: "spawn-bar spawn-bar-high", text: "High" };
  }
}

function displayPokemon(pokemonData) {
  cardFront.innerHTML = "";
  pokemonData.forEach((pokemon) => {
    const card = document.createElement("section");
    card.classList.add("pokemon-card");
    const typeEmojis = pokemon.type
      .map((type) => `<article class="type-icon">${typeIcons[type]}</article>`)
      .join("");
    card.innerHTML = `
      <article class="pokemon-num">#${pokemon.num}</article>
      <img class="pokemon-image" src="${pokemon.img}" alt="${pokemon.name}">
      <article class="pokemon-name"> ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</article>
      <article class="pokemon-type">${typeEmojis}</article
      <article class="pokemon-cp">Max CP: ${pokemon.stats["max-cp"]}</article>
      <article class="pokemon-region">Region: ${pokemon.generation.name}</article>
    `;
    cardFront.appendChild(card);
    card.addEventListener("click", () => {
      const expandedCard = document.createElement("article");
      expandedCard.classList.add("pokemon-card-expanded");
      expandedCard.innerHTML = `
        
      <section  class="pokemon-info">
        <section class="item">
          <article class="num"> #${pokemon.num}</article> 
          <article class="name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</article> 
          <img class="img" src="${pokemon.img}" alt="${pokemon.name}">
          <article class="height"> Height: ${pokemon.size.height}</article> 
          <article class="weight"> Weight: ${pokemon.size.weight}</article> 
          <article class="region">Region: ${pokemon.generation.name}</article>
      </section>
      <section class ="item">
      <article class="about">About: ${pokemon.about}</article>
      <article class="pokemon-egg-expanded">Spawns in eggs: ${pokemon.egg === "not in eggs" ? "No" : "Yes"}</article>
      <article class="quick-movement-expanded">Quick movement:${pokemon["quick-move"].map((attack) => `<div class="quick-move-container">
          <span>${attack.name}</span>
          ${typeIcons[attack.type]}
        </div>
      `).join("")}
      </article>
      <article class="special-attack-expanded">Special attack:${pokemon["special-attack"].map((attack) => `<div class="special-attack-container">
          <span>${attack.name}</span>
          ${typeIcons[attack.type]}
        </div>
      `).join("")}
      </article>
      <article class:"spawn-chance-header">Spawn Chance</article>
      <article class="spawn-bar ${spawnChanceColor(pokemon["spawn-chance"],averageSpawnChance).className}">
        <span class="spawn-bar-text">${spawnChanceColor(pokemon["spawn-chance"],averageSpawnChance).text}</span>
      </article>
      </section>
      </section>
      `; 

      cardFront.style.display = "none";
      cardContainer.appendChild(expandedCard);

      expandedCard.addEventListener("click", () => {
        cardFront.style.display = "flex";
        cardContainer.removeChild(expandedCard);
      });
    });
  });
}

displayPokemon(data.pokemon);

//elementos del dom
const inputName = document.getElementById("search");
const selectType = document.querySelector(".type");
const sort = document.querySelector(".sort-by");
const filterRarity = document.querySelector(".rarity");
const filterRegion = document.querySelector(".region");

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
  if (pokemonsFiltered.length === 0) {
    const noPokemonFound = document.createElement("div");
    noPokemonFound.id = "no-results-found";
    noPokemonFound.textContent = "No Pokémon matched the entered criteria, please try again.";
    cardContainer.innerHTML = "";
    cardContainer.appendChild(noPokemonFound);
  } else {
    displayPokemon(pokemonsFiltered);
  }
}
inputName.addEventListener("keyup", searchPokemon);

function filterPokemonByType(event) {
  const selectedType = event.target.value;
  let pokemonsFiltered;
  
  if (selectedType === "all") {
    pokemonsFiltered = data.pokemon;
  } else {
    pokemonsFiltered = filterByType(data.pokemon, selectedType);
  }
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
  if (selectedSort === "Z-A") {
    sortedPokemon = sortByName(data.pokemon, "ZA");
  } else if (selectedSort === "A-Z") {
    sortedPokemon = sortByName(data.pokemon, "AZ");
  } else if (selectedSort === "desc") {
    sortedPokemon = sortByCP(data.pokemon,"desc");
  } else if (selectedSort === "asc") {
    sortedPokemon = sortByCP(data.pokemon,"asc");
  } else {
    sortedPokemon = data.pokemon;
  }
  displayPokemon(sortedPokemon);
}
sort.addEventListener("change", manageSortSelect);

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
  const currentPosition = window.scrollY;
  if (currentPosition > 0) {
    requestAnimationFrame(goToTop); 
    window.scrollTo(0, currentPosition - currentPosition / 8);
  }
};
backToTopButton.addEventListener("click", goToTop);
