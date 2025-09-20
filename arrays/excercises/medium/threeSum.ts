/** The task was:
 *
 * Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
 * and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

/** This was my first solution.
 * It works, but it is messy.
 * Also, it shows what is my mind's default way of thinking for now.
 * First, left pointer should be in a for loop so that I can avoid manually resetting it.
 * Then, solution for duplicates is implemented catastrophicly bad with a Set of strings.
 */
function threeSum(nums: number[]): number[][] {
  const tripletsSet = new Set<string>();
  const triplets: number[][] = [];
  let left = 0;
  let middle = 1;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (left < nums.length - 2) {
    if (nums[left] + nums[middle] + nums[right] === 0) {
      if (!tripletsSet.has([nums[left], nums[middle], nums[right]].join(""))) {
        triplets.push([nums[left], nums[middle], nums[right]]);
        tripletsSet.add([nums[left], nums[middle], nums[right]].join(""));
      }
    }

    nums[left] + nums[middle] + nums[right] > 0 ? right-- : middle++;

    if (middle >= right) {
      left++;
      middle = left + 1;
      right = nums.length - 1;
    }
  }

  return triplets;
}


/** 
 * This is way better.
 * They say it is a classic two-pointer technique, but I see three of them.
 * Nevertheless, the idea is clear and simple.
 * My biggest struggle was to handle duplicates with O(1) space complexity.
 * Now it is hard to explain where was a bug in my mind.
 * When I look at the code now, it looks so painfully obvious.
 */
function threeSum1(nums: number[]): number[][] {
  const triplets: number[][] = [];
  let middle = 1;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  for (let left = 0; left < nums.length - 2; left++) {
    middle = left + 1;
    right = nums.length - 1;

    if (nums[left] === nums[left - 1]) continue;

    while (middle < right) {
      const sum = nums[left] + nums[middle] + nums[right];

      if (sum === 0) {
        triplets.push([nums[left], nums[middle], nums[right]]);
        let currentRight = nums[right];
        let currentMiddle = nums[middle];
        /**
         * The only part that I am not fully satisfied with is this one.
         * I have to move both pointers one step back, after I finnally move them to the next different elements,
         * because of the way I structured this if statement and the whole while loop
         * But I will not breaking my head over coding style right now.
         * It is not big of a deal regarding performance.
         * If I ever have to do this task again, I will do it differently.
         */
        while (nums[right] === currentRight) right--;
        while (nums[middle] === currentMiddle) middle++;
        right++;
        middle--;
      }

      sum > 0 ? right-- : middle++;
    }
  }

  return triplets;
}
