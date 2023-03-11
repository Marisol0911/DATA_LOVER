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
