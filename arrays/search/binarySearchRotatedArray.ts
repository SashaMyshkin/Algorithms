/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function,
 * nums is possibly left rotated at an unknown index k (1 <= k < nums.length)
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].
 *
 * Given the array nums after the possible rotation and an integer target,
 * return the index of target if it is in nums, or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

/** My first idea was to continue binary search even when the left and right pointers crossed.
 * If they crossed a second time, that would mean the element doesn’t exist, so I’d return -1.
 * However, this approach has O(n) time complexity.
 * That’s why I had to adjust the binary search logic.
 * First, we check which part of the array is sorted,
 * and then we perform binary search on that sorted part.
 */


function binarySearchRotatedArray(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let pivot = Math.floor((right + left) / 2);

    if (nums[pivot] === target) return pivot;

    if (nums[pivot] >= nums[left]) {
      target >= nums[left] && target <= nums[pivot]
        ? (right = pivot - 1)
        : (left = pivot + 1);
    } else {
      target <= nums[right] && target >= nums[pivot]
        ? (left = pivot + 1)
        : (right = pivot - 1);
    }
  }
  return -1;
}
