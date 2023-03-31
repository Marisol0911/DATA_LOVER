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
} from "../src/data.js";

import { datMock } from "./mockData.js";

describe("calculateAverageSpawnChance", () => {
  it("is a function", () => {
    expect(typeof calculateAverageSpawnChance).toBe("function");
  });

  it('should calculate the average spawn chance correctly', () => {
    const expectedAverageSpawnChance = 0.769;
    const averageSpawnChance = calculateAverageSpawnChance(datMock);
  
    expect(averageSpawnChance).toBe(expectedAverageSpawnChance);});});

describe("filterByName function", () => {
  test("filterByName returns name", () => {
    const filtered = filterByName(datMock.pokemon, "venusaur");
    expect(filtered).toHaveLength(1);
  });
  test("filterByName returns name", () => {
    const filtered = filterByName(datMock.pokemon, "pinkemon");
    expect(filtered).toHaveLength(0);
  });
});

describe("filterByType function", () => {
  test("filterByType returns all Pokemon with matching type", () => {
    const filtered = filterByType(datMock.pokemon, "grass");
    expect(filtered).toHaveLength(3);
  });
  test("returns an empty array if there is no type matches",() => {
    const filtered= filterByType(datMock.pokemon, "psychic");
    expect (filtered).toHaveLength(0);
  })
});

describe("returns all Pokemon with matching region", () => {
  test("filterByRegion returns all Pokemon with matching region", () => {
    const filtered = filterByRegion(datMock.pokemon, "kanto");
    expect(filtered).toHaveLength(6);
  });
  test("returns empty array for no matching region", () => {
    const filtered = filterByRegion(datMock.pokemon, "alola");
    expect(filtered).toHaveLength(0);
  });
});

describe("sortByNum", () => {
  test("sorts Pokemon by ascending number", () => {
    const sorted = sortByNum(datMock.pokemon);
    expect(sorted[0].num).toBe("001");
    expect(sorted[1].num).toBe("002");
    expect(sorted[2].num).toBe("003");
    expect(sorted[3].num).toBe("004");
    expect(sorted[4].num).toBe("007");
    expect(sorted[5].num).toBe("010");
  });
});

describe("sortByCP function", () => {
  test("sortByCP sorts pokémon by CP in ascending order", () => {
    const sorted = sortByCP(datMock.pokemon, "asc");
    expect(sorted[0].name).toBe("caterpie");
    expect(sorted[1].name).toBe("squirtle");
    expect(sorted[2].name).toBe("charmander");
    expect(sorted[3].name).toBe("bulbasaur");
    expect(sorted[4].name).toBe("ivysaur");
    expect(sorted[5].name).toBe("venusaur");
  });
  test("sorts unordered CP pokemon in ascending order", () => {
    const unsortedCP = [    { name: "Charizard", stats: { "max-cp": 2000 } },    { name: "Blastoise", stats: { "max-cp": 1800 } },    { name: "Venusaur", stats: { "max-cp": 2200 } },  ];
    const sortedCP= sortByCP (unsortedCP,"desc");
    expect(sortedCP[0].name).toBe("Venusaur");
    expect(sortedCP[1].name).toBe("Charizard");
    expect(sortedCP[2].name).toBe("Blastoise");
  })
  test("sortByCP sorts pokémon by CP in descending order", () => {
    const sorted = sortByCP(datMock.pokemon, "desc");
    expect(sorted[0].name).toBe("venusaur");
    expect(sorted[1].name).toBe("ivysaur");
    expect(sorted[2].name).toBe("bulbasaur");
    expect(sorted[3].name).toBe("charmander");
    expect(sorted[4].name).toBe("squirtle");
    expect(sorted[5].name).toBe("caterpie");
  });
});

describe("sortByName function", () => {
  test("sortByName sorts by name in descending order", () => {
    const sorted = sortByName(datMock.pokemon, "ZA");
    expect(sorted[0].name).toBe("bulbasaur");
    expect(sorted[1].name).toBe("caterpie");
    expect(sorted[2].name).toBe("charmander");
    expect(sorted[3].name).toBe("ivysaur");
    expect(sorted[4].name).toBe("squirtle");
    expect(sorted[5].name).toBe("venusaur");
  });

  test("sortByName sorts by name in ascending order", () => {
    const sorted = sortByName(datMock.pokemon, "AZ");
    expect(sorted[0].name).toBe("venusaur");
    expect(sorted[1].name).toBe("squirtle");
    expect(sorted[2].name).toBe("ivysaur");
    expect(sorted[3].name).toBe("charmander");
    expect(sorted[4].name).toBe("caterpie");
    expect(sorted[5].name).toBe("bulbasaur");
  });
  
  test("no modifications made to the array if name properties are equal. in ascending order", () => {
    const tieExample = [    { name: "Caterpie" },    { name: "Caterpie" },    { name: "Caterpie" },  ];
    const sorted = sortByName(tieExample, "AZ");
    expect(sorted).toEqual(tieExample);});});

describe("filterByRarity function", () => {
  test("returns all Pokemon with the assigned rarity", () => {
    const filtered = filterByRarity(datMock.pokemon, "normal");
    expect(filtered).toHaveLength(6);});
      
  test("returns an empty array if no Pokemon matches the assigned rarity", () => {
    const filtered = filterByRarity(datMock.pokemon, "legendary");
    expect(filtered).toHaveLength(0);});});