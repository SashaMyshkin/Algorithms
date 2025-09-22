/**
 * The task was:
 * Given an integer array nums of length n and an integer target,
 * find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 */

/** I am very proud of this solution because I came up with it myself
 * and solved it from the first try.
 * The time complexity is O(n^2) because of nested loops.
 * The space complexity is O(1) because we are not using any additional data structures 
 * that grow with input size.
 */
function threeSumClosest(nums: number[], target: number): number {
  let closest: number = Number.MAX_VALUE;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (target === sum) return sum;
      if (Math.abs(target - sum) < Math.abs(target - closest)) closest = sum;
      sum < target ? left++ : right--;
    }
  }

  return closest;
}
