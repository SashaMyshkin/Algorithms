function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let pivot = Math.floor((right + left) / 2);
    if (nums[pivot] === target) return pivot;
    nums[pivot] < target ? (left = pivot + 1) : (right = pivot - 1);
  }

  return -1;
}
