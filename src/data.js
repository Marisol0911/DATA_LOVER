// estas funciones son de ejemplo
export const filterByName = (data, filterName) => {
  return data.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1
  );
};

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */

/*export const sortData = (datos, condicion) => {
  return datos.sort(condicion);

export const anotherExample = () => {
  return "OMG";
};*/
export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return "OMG";
};
