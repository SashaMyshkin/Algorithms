/** Task:
 * Implement the merge sort algorithm to sort an array of numbers in ascending order.
 * Merge sort is a divide and conquer algorithm that divides the array into two halves,
 * recursively sorts each half, and then merges the sorted halves back together.
 * The algorithm should have a time complexity of O(n log n) and a space complexity of O(n).
 * The merge sort algorithm was invented by John von Neumann in 1945.
 */

/**
 * Few days ago I was struggling to implement it.
 * I was trying to do everything at once.
 * And my thoughts were completely confused.
 * But when I got the task on LeetCode to merge two sorted arrays,
 * I realized that the merge sort algorithm has to be done in two steps.
 *
 * The only flaw in this implementation that I can see is using maxLenght variable
 * which means I also have to use continue statement. This could be avoided.
 */
function mergeSort(array) {
  /** This is simply a function that merges two sorted arrays */
  const merge = (arr1, arr2) => {
    const finalArray = [];
    /** It has to be executed  arr1.length + arr2.length times.*/
    let maxLength = arr1.length + arr2.length;
    /** Those are pointers for both arrays and they are placed at the begginig. */
    let first = 0;
    let second = 0;

    /** We are looping over n+m times */
    for (let i = 0; i < maxLength; i++) {
      /** If one of the arrays is exausted, we push the elements from the other one. And skip the step. */
      if (arr1[first] == undefined) {
        finalArray.push(arr2[second]);
        second++;
        continue;
      }
      if (arr2[second] == undefined) {
        finalArray.push(arr1[first]);
        first++;
        continue;
      }

      /*
       *We compare the elements at the pointers and push the smaller one to the final array.
       *Then we move the pointer of the array from wich we took the element one step forward.
       */
      if (arr1[first] <= arr2[second]) {
        finalArray.push(arr1[first]);
        first++;
      } else {
        finalArray.push(arr2[second]);
        second++;
      }
    }

    return finalArray;
  };

  /*The magic happens here.*/
  const sort = (arr) => {
    /** This is the base case. We have nothing to split further. */
    if (arr.length === 1) return arr;
    /* First, we determine the middle of the array.
     * And then we split the array into two halves.*/
    const divider = Math.floor(arr.length / 2);
    const left = arr.slice(0, divider);
    const right = arr.slice(divider, arr.length);

    /*
     * And before merging, we keep calling the same function until we reach the base case.
     * This basically means that it will keep splitting the array in halves until we reach arrays of length 1.
     * Then, it will start merging them back together in sorted order.*/
    const sortedLeft = sort(left);
    const sortedRight = sort(right);
    return merge(sortedLeft, sortedRight);
  };

  return sort(array);
}

/** 
 * This is better implementation of the same algorithm.
 * Becase it uses while loop instead of for loop with maxLength variable.
 * When one of the arrays is exausted, we simply break the loop and push the rest of the other array.
 */
function mergeSort2(array) {
  const merge = (arr1, arr2) => {
    const finalArray = [];
    let maxLength = arr1.length + arr2.length;
    let first = 0;
    let second = 0;

    while (first < arr1.length && second < arr2.length) {
      if (arr1[first] <= arr2[second]) {
        finalArray.push(arr1[first]);
        first++;
      } else {
        finalArray.push(arr2[second]);
        second++;
      }
    }

    first === arr1.length
      ? finalArray.push(...arr2.slice(second))
      : finalArray.push(...arr1.slice(first));

    return finalArray;
  };

  const sort = (arr) => {
    if (arr.length <= 1) return arr;
    const divider = Math.floor(arr.length / 2);
    const sortedLeft = sort(arr.slice(0, divider));
    const sortedRight = sort(arr.slice(divider, arr.length));
    return merge(sortedLeft, sortedRight);
  };

  return sort(array);
}
