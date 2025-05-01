export default function linearSearch(
  haystack: number[],
  needle: number
): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}
// Time complexity: O(n)
// Space complexity: O(1)
