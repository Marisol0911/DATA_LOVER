import { filterByName, sortByName, filterByType } from "./data.js";

import data from "./data/pokemon/pokemon.js";

//selecion de elementos del DOM
const inputName = document.getElementById("btnName");
const cardToShow = document.getElementById("card-front");

//console.log(sortByName(data.pokemon));
//console.log(filterByType(data.pokemon, "grass"));
//console.log(filterByName(data.pokemon, "ditto"));
function printPokemonName(event) {
  //alert("Hola mundo");
  const value = event.target.value;

  const pokemonsFiltered = filterByName(data.pokemon, value);
  console.log(pokemonsFiltered);
}

inputName.addEventListener("keydown", printPokemonName);
