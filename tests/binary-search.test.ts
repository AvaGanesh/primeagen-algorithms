import binarySearch from "../algorithms/search/binary-search";

describe("binarySearch", () => {
  it("should return true when the needle is found in the haystack", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(true);
  });

  it("should return false when the needle is not found in the haystack", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(false);
  });
});
