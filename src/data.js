export const filterByName = (data, filterName) => {
  return data.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1
  );
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

export const filterByType = (data, typeUser) => {
  return data.filter((pokemon) => pokemon.type.includes(typeUser));
};
