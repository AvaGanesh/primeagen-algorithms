export default function binarySearch(haystack: number[], needle: number) {
  let low = 0;
  let high = haystack.length;
  do {
    const mid = Math.floor(low + (high - low) / 2);
    const v = haystack[mid];

    if (v === needle) {
      return true;
    } else if (v > needle) {
      high = mid;
    } else {
      low = mid + 1;
    }
  } while (low < high);

  return false;
}
// Time complexity: O(log n)
// Space complexity: O(1)
