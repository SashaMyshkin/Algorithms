/**
 * The Quick Sort algorithm was invented by Tony Hoare in 1960.
 * It is a divide and conquer algorithm that works by selecting a 'pivot' element from the array.
 * Then, every element smaller than the pivot is moved to its left,
 * and every element larger than the pivot is moved to its right.
 *
 * There are two common partitioning schemes: Lomuto and Hoare.
 */

/**
 * This implementation uses the Lomuto partition scheme.
 * It works by maintaining a boundary between elements less than the pivot and those greater than the pivot.
 * The algorithm iterates through the array, and whenever it finds an element less than or equal to the pivot,
 * it swaps it with the element at the boundary and moves the boundary one position to the right.
 * After processing all elements, it places the pivot in its correct position by swapping it with the element at the boundary.
 * This process is repeated recursively for the sub-arrays on either side of the pivot until the entire array is sorted.
 *
 * Time Complexity:
 * O(n log n) on average,
 * O(n^2) in the worst case (when the smallest or largest element is always chosen as the pivot).
 *
 * Space Complexity: O(log n) on average due to recursive stack space.
 * O(n) in the worst case.
 *
 * Stability: Not stable (equal elements may not retain their original order).
 *
 * In-Place: Yes (requires a small, constant amount of additional storage space).
 *
 * Usage: Suitable for large datasets and when average-case performance is more critical than worst-case performance.
 */
function quickSort(array) {
  function lomutoPartition(walker, pivot) {
    let boundary = walker;
    for (walker; walker < pivot; walker++) {
      if (array[pivot] >= array[walker]) {
        [array[walker], array[boundary]] = [array[boundary], array[walker]];
        boundary++;
      }
    }
    [array[pivot], array[boundary]] = [array[boundary], array[pivot]];
    return boundary;
  }

  function sort(start, end) {
    if (start >= end) return;
    const pivotIndex = lomutoPartition(start, end);
    sort(start, pivotIndex - 1);
    sort(pivotIndex + 1, end);
  }

  sort(0, array.length - 1);

  return array;
}