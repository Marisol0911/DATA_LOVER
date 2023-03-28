import {
  filterByName,
  //filterByRarity,
  //filterByRegion,
  //sortByAscCP,
  //sortByDescCP,
  //sortByName,
  //sortByNameZA,
  //calculateAverageSpawnChance,
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
    const filtered = filterByName(datMock.pokemon, "calosmon");
    expect(filtered).toHaveLength(0);
  });
});
//q: How do I install eslint?
