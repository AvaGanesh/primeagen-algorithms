import linearSearch from "../algorithms/search/linear-search";

describe("linearSearch", () => {
  it("should return true when the needle is found in the haystack", () => {
    expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(true);
  });

  it("should return false when the needle is not found in the haystack", () => {
    expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(false);
  });
});
