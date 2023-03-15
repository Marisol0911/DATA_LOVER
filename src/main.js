import { filterByName, sortByName, filterByType } from "./data.js";

import data from "./data/pokemon/pokemon.js";
//console.log(sortByName(data.pokemon));
//console.log(filterByType(data.pokemon, "grass"));
//console.log(filterByName(data.pokemon, "ditto"));
const cardFront = document.querySelector(".card-front-container");
const cardBack = document.querySelector(".card-back-container");
const cardContainer = document.querySelector("main");
const typeIcons = {
  normal:
    '<span class="type-icon"><img src="/src/typelogo/normalicon.png" alt="normal"></span>',
  fire: '<span class="type-icon"><img src="/src/typelogo/fireicon.png" alt="fire"></span>',
  water:
    '<span class="type-icon"><img src="/src/typelogo/watericon.png" alt="water"></span>',
  electric:
    '<span class="type-icon"><img src="/src/typelogo/electricicon.png" alt="electric"></span>',
  grass:
    '<span class="type-icon"><img src="/src/typelogo/grassicon.png" alt="grass"></span>',
  ice: '<span class="type-icon"><img src="/src/typelogo/iceicon.png" alt="ice"></span>',
  fighting:
    '<span class="type-icon"><img src="/src/typelogo/fightingicon.png" alt="fighting"></span>',
  poison:
    '<span class="type-icon"><img src="/src/typelogo/poisonicon.png" alt="poison"></span>',
  ground:
    '<span class="type-icon"><img src="/src/typelogo/groundicon.png" alt="ground"></span>',
  flying:
    '<span class="type-icon"><img src="/src/typelogo/flyingicon.png" alt="flying"></span>',
  psychic:
    '<span class="type-icon"><img src="/src/typelogo/psychicicon.png" alt="psychic"></span>',
  bug: '<span class="type-icon"><img src="/src/typelogo/bugicon.png" alt="bug"></span>',
  rock: '<span class="type-icon"><img src="/src/typelogo/rockicon.png" alt="rock"></span>',
  ghost:
    '<span class="type-icon"><img src="/src/typelogo/ghosticon.png" alt="ghost"></span>',
  dragon:
    '<span class="type-icon"><img src="/src/typelogo/dragonicon.png" alt="dragon"></span>',
  dark: '<span class="type-icon"><img src="/src/typelogo/darkicon.png" alt="dark"></span>',
  steel:
    '<span class="type-icon"><img src="/src/typelogo/steelicon.png" alt="steel"></span>',
  fairy:
    '<span class="type-icon"><img src="/src/typelogo/fairyicon.png" alt="fairy"></span>',
};
function displayPokemon(pokemonData) {
  pokemonData.pokemon.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
    const typeEmojis = pokemon.type
      .map((type) => `<div class="type-icon">${typeIcons[type]}</div>`)
      .join("");
    card.innerHTML = `
      <div class="pokemon-num">#${pokemon.num}</div>
      <img class="pokemon-image" src="${pokemon.img}" alt="${pokemon.name}">
      <div class="pokemon-name">${
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      }</div>
      <div class="pokemon-type">${typeEmojis}</div>
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
      `;
      cardFront.style.display = "none";
      cardBack.style.display = "none";
      cardContainer.appendChild(expandedCard);
      expandedCard.addEventListener("click", () => {
        cardFront.style.display = "grid";
        cardBack.style.display = "grid";
        cardContainer.removeChild(expandedCard);
      });
    });
  });
}

displayPokemon(data);
