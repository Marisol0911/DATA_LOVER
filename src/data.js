export const filterByName = (data, filterName) => {
  return data.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1
  );
};

export const sortByName = (data) => {
  return data.sort((pokemonA, pokemonB) => {
    if (pokemonA.name > pokemonB.name) {
      return -1;
    } else if (pokemonA.name < pokemonB.name) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const sortByCP = (data) => {
  data.forEach((pokemon) => {
    pokemon.stats["max-cp"] = parseInt(pokemon.stats["max-cp"]);
  });
  return data.sort((pokemonA, pokemonB) => {
    if (pokemonA.stats["max-cp"] > pokemonB.stats["max-cp"]) {
      return -1;
    } else if (pokemonA.stats["max-cp"] < pokemonB.stats["max-cp"]) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const filterByType = (data, typeUser) => {
  return data.filter((pokemon) => pokemon.type.includes(typeUser));
};
