import {
  filterByName,
  //sortByName,
  filterByType,
  //sortByNum,
  //sortByCP,
  //filterByRarity,
  filterByRegion,
  //calculateAverageSpawnChance,
  //anidatedFilters,
} from "../src/data.js";

import { datMock } from "./mockData.js";

/*describe("calculateAverageSpawnChance", () => {
  it("is a function", () => {
    expect(typeof calculateAverageSpawnChance).toBe("function");
  });

  it.skip("returns `example`", () => {
    expect(example()).toBe("example");
  });
});*/

/*describe("anotherExample", () => {
  it.skip("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it.skip("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});*/

describe("Should return result by name", () => {
  test("filterByName return name", () => {
    const filtered = filterByName(datMock.pokemon, "venusaur");
    expect(filtered).toHaveLength(1);
  });
  test("filterByName return name", () => {
    const filtered = filterByName(datMock.pokemon, "pinkemon");
    expect(filtered).toHaveLength(0);
  });
});

describe("returns all Pokemon with matching type", () => {
  test("filterByType returns all Pokemon with matching type", () => {
    const filtered = filterByType(datMock.pokemon, "grass");
    expect(filtered).toHaveLength(3);
  });
});

describe("returns all Pokemon with matching region", () => {
  test("filterByRegion returns all Pokemon with matching region", () => {
    const filtered = filterByRegion(datMock.pokemon, "kanto");
    expect(filtered).toHaveLength(6);
  });
});


