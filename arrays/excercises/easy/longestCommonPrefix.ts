/** The task was:
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters if it is non-empty.
 */

/** This
 * implementation is solid. However, concatenating strings in a loop is not optimal.
 * Time complexity is O(S) where S is the sum of all characters in all strings.
 * Space complexity is O(1) if we don't count the output string.
 */
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];

  function stringDifference(str1: string, str2: string): string {
    let diff = "";
    let i = 0;
    while (str1[i] === str2[i]) {
      if (str1[i] === undefined || str2[i] === undefined) break;
      diff += str1[i];
      i++;
    }

    return diff;
  }

  let difference = strs[0];
  for (let i = 1; i < strs.length; i++) {
    difference = stringDifference(difference, strs[i]);
  }

  return difference;
}

/** This implementation is much better.
 * No string concatenation in a loop.
 * Time complexity is O(S) where S is the sum of all characters in all strings.
 * Space complexity is O(1) if we don't count the output string.
 */
function longestCommonPrefix1(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let pointer = strs[0].length;

  for (let i = 1; i < strs.length; i++) {
    let count = 0;
    while (
      count < strs[0].length &&
      count < strs[i].length &&
      strs[0][count] === strs[i][count]
    ) {
      count++;
    }
    pointer = Math.min(pointer, count);
  }

  return strs[0].slice(0, pointer);
}

/** 
 * I had a problem with the last function.
 * I struggled to implement this simple idea of keeping a track of the pointer.
 * The main problem was that I had ambiguous definitions of count and pointer.
 * The moment I clearly defined them in my mind, the implementation bacame straightforward.
 */
