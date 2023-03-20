export const filterByName = (data, filterName) => {
  return data.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1
  );
};

export const getNextEvolutions = (pokemonEvolutions, pokemonData) => {
  const nextEvolutions = [];
  pokemonEvolutions.forEach((searchPokemon) => {
    nextEvolutions.push(
      pokemonData.find((pokemon) => pokemon.name === searchPokemon.name)
    );

    if (searchPokemon["next-evolution"] !== undefined) {
      const newEvolutions = getNextEvolutions(
        searchPokemon["next-evolution"],
        pokemonData
      );
      newEvolutions.forEach((newPokemon) => {
        nextEvolutions.push(newPokemon);
      });
    }
  });

  return nextEvolutions;
};

export const filternextEvolution = (data, filterNexEvolution) => {
  return data.filter((pokemon) =>
    pokemon["next-evolution"].includes(filterNexEvolution)
  );
};

export const filterprevEvolution = (data, filterPreEvolution) => {
  return data.filter((pokemon) =>
    pokemon["prev-evolution"].includes(filterPreEvolution)
  );
};
export const sortByNum = (data) => {
  return data.sort((a, b) => {
    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }

    return 0;
  });
};

export const sortByName = (data) => {
  return data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });
};

export const sortByNameZA = (data) => {
  return data.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }

    return 0;
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
