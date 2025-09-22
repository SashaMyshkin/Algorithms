/**
 * The task was:
 *
 * Given an integer array nums and an integer val,
 * remove all occurrences of val in nums in-place.
 * The order of the elements may be changed.
 * Then return the number of elements in nums which are not equal to val.
 * Consider the number of elements in nums which are not equal to val be k, to get accepted,
 * you need to do the following things:
 * Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
 * The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 */

/**
 * I have no idea why I struglled for hours on this one yesterday.
 * Today I solved it in 3-4 minutes.
 * It took me just to write the code.
 *
 * My default thinking is "Everything, everywere all at once"
 * which is not always good.
 *
 * From the start I understood that I need two pointers:
 * one to iterate through the array
 * and another to keep track of "something".
 * And because that "something" was not clear to me,
 * I wrongly started with the condition inside the loop:
 * if(nums[i] === val).
 * And then pandora's box was opened.
 *
 * Today I said to myself:
 * You have to have O(n) time complexity.
 * What if nums[i] === val, skip it.
 * What if nums[i] !== val, copy it to the place where nums[i] === val was.
 * So I need a pointer to keep track of where to copy the value.
 *
 * So simple, and yet so hard for me to see it yesterday.
 * I learned from this that I don't need to care about everything,
 * but only about the things that matter.
 */

function removeElement(nums: number[], val: number): number {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
}
