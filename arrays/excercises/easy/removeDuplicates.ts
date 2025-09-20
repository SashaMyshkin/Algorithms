/** The task was:
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 * Consider the number of unique elements of nums to be k,
 * to get accepted, you need to do the following things:
 *
 * 1. Change the array nums such that the first k elements of nums contain the unique elements
 * in the order they were present in nums initially.
 * The remaining elements of nums are not important as well as the size of nums.
 * 2. Return k.
 *
 * Custom Judge:
 * The judge will test your solution with the following code:
 * int[] nums = [...]; // Input array
 * int[] expectedNums = [...]; // The expected answer with correct length
 * int k = removeDuplicates(nums); // Calls your implementation
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 * assert nums[i] == expectedNums[i];
 * }
 * If all assertions pass, then your solution will be accepted.
 */

/** This was my first solution.
 * But I did't know that in-place means O(1) space complexity.
 * I thought that in-space means that we can modify the input array directly.
 */
function removeDuplicates(nums: number[]) {
  const pool = new Set<number>();
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!pool.has(nums[i])) {
      pool.add(nums[i]);
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  return pointer;
}

/**
 * These are two solutions with O(1) space complexity.
 * This one compares the current element with the next one.
 * When i is at the last index, nums[i+1] is undefined,
 * so the last element will be added to the result.
 * This undefined trick works, but has to be avoided for clearity.
 */
function removeDuplicates1(nums: number[]) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
}

/**
 * That's why this solution is better.
 * It compares the current element with the previous one,
 * supposing that the first element is always unique.
 * This is not my default way of thinking.
 * But whenever task allows us to check current element with the previous one,
 * it is better to do so, because we don't have to deal with undefined.
 */
function removeDuplicates2(nums: number[]) {
  let pointer = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  return pointer;
}
