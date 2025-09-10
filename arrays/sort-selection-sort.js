/**
 * Selection sort algorithm works like this:
 * - Start with the current position in the array.
 * - Select (find) the smallest element in the unsorted part (from current position to the end).
 * - Swap it with the element at the current position.
 * - Move to the next position and repeat until the array is sorted.
 *
 * Time complexity: O(n^2) comparisons, O(n) swaps.
 */


//This is my original solution:
function selectionSort1(array) {
  let point = 0;

  while (point < array.length) {
    let indexOfMinValue = point;

    for (let i = point; i < array.length; i++) {
      if (array[indexOfMinValue] > array[i]) indexOfMinValue = i;
    }

    const minValue = array[indexOfMinValue];
    const pointValue = array[point];
    array[point] = minValue;
    array[indexOfMinValue] = pointValue;

    point++;
  }

  return array;
}

//However it can be simplified with destructuring
function selectionSort2(array) {
  let point = 0;

  while (point < array.length) {
    let indexOfMinValue = point;

    for (let i = point; i < array.length; i++) {
      if (array[indexOfMinValue] > array[i]) indexOfMinValue = i;
    }

    [array[point], array[indexOfMinValue]] = [
      array[indexOfMinValue],
      array[point],
    ];

    point++;
  }

  return array;
}
