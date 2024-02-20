// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseString(s: string[]): string[] {
  let first = 0;
  let last = s.length - 1;

  while (first < last) {
    [s[first], s[last]] = [s[last], s[first]];
    first++;
    last--;
  }

  return s;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
