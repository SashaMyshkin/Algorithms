/** The task was:
 *
 * A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
 * For example, for arr = [1,2,3], the following are all the permutations of arr:
 * [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
 * The next permutation of an array of integers is the next lexicographically greater permutation of its integer.
 * More formally, if all the permutations of the array are sorted in one container according to their lexicographical order,
 * then the next permutation of that array is the permutation that follows it in the sorted container.
 * If such arrangement is not possible, the array must be rearranged as the lowest possible order
 * (i.e., sorted in ascending order).
 * For example, the next permutation of arr = [1,2,3] is [1,3,2].
 * Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
 * While the next permutation of arr = [3,2,1] is [1,2,3]
 * because [3,2,1] does not have a lexicographical larger rearrangement.
 *
 * Given an array of integers nums, find the next permutation of nums.
 * The replacement must be in place and use only constant extra memory.
 */


/**
 * It took me a while to wrap my head around the next lexicographical
 * permutation algorithm. But once I got it, the implementation only
 * took a few minutes.
 *
 * The core idea:
 * 1. Find the pivot. The pivot is the index of the first element
 *    (going from right to left) that is smaller than its neighbor to the right.
 * 2. Find the swap index. This is the index of the smallest element
 *    (scanning from the right) that is greater than the pivot value.
 * 3. Swap the pivot and the swap element.
 * 4. Finally, reverse the subarray starting at pivot + 1 to the end.
 * 
 * Notes:
 * While searching for the pivot, the suffix (to the right) ends up being
 * in descending order. That’s why reversing it is safe.
 * Also, when finding the swap index, scanning from right to left ensures
 * that the first element greater than the pivot is the smallest such element.
 */


function nextPermutation(nums: number[]): void {
  //find pivot index
  let pivot = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivot = i;
      break;
    }
  }
  /** Specific requirement from the task. */
  if (pivot === -1) {
    nums.reverse();
    return;
  }

  //find swap index
  let swap = nums.length - 1;
  for (let i = nums.length - 1; i > pivot; i--) {
    if (nums[pivot] < nums[i]) {
      swap = i;
      break;
    }
  }

  //swap them
  [nums[pivot], nums[swap]] = [nums[swap], nums[pivot]];

  //reverse the rest
  let start = pivot + 1;
  let end = nums.length - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
