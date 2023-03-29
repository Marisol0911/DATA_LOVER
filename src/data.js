export const filterByName = (data, filterName) => {
  return data.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1
  );
};

export const filterByType = (data, typeUser) => {
  return data.filter((pokemon) => pokemon.type.includes(typeUser));
};

export const filterByRegion = (data, regionUser) => {
  return data.filter((pokemon) => pokemon.generation.name.includes(regionUser));
};

export const filterByRarity = (data, rarityUser) => {
  return data.filter((pokemon) =>
    pokemon["pokemon-rarity"].includes(rarityUser)
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

export const sortByName = (data, order) => {
  if (order === "ZA") {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else if (order === "AZ") {
    return data.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return data;
  }
};

export const sortByCP = (data, order) => {
  data.forEach((pokemon) => {
    pokemon.stats["max-cp"] = parseInt(pokemon.stats["max-cp"]);
  });
  if (order === "desc") {
    return data.sort((pokemonA, pokemonB) => {
      if (pokemonA.stats["max-cp"] > pokemonB.stats["max-cp"]) {
        return -1;
      } else if (pokemonA.stats["max-cp"] < pokemonB.stats["max-cp"]) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return data.sort((pokemonA, pokemonB) => {
      if (pokemonA.stats["max-cp"] < pokemonB.stats["max-cp"]) {
        return -1;
      } else if (pokemonA.stats["max-cp"] > pokemonB.stats["max-cp"]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};

export const calculateAverageSpawnChance = (data) => {
  let spawnChanceSum = 0;
  let pokemonCount = 0;

  for (const pokemon of data.pokemon) {
    if (pokemon["spawn-chance"] !== null) {
      spawnChanceSum += parseFloat(pokemon["spawn-chance"]);
      pokemonCount++;
    }
  }

  const averageSpawnChance = spawnChanceSum / pokemonCount;
  return averageSpawnChance;
};
