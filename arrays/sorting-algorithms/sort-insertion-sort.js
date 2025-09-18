/**
 *
 * Insertion sort divides the array into a sorted and an unsorted part.
 * The first element is considered sorted, so it starts at the second position.
 * Then it checks through the sorted part to find where to insert the element
 * at the pointer position.
 */

/** My original solution
 * It captures the core idea, but there are unnecessary swaps.
 * This is some sort of hybrid between selection sort and insertion sort.
 */
function insertionSort1(array) {
  let pointer = 1;
  while (pointer < array.length) {
    let key = pointer;
    for (let i = pointer - 1; i >= 0; i--) {
      //Here we have unnecessary swaps, and no shifting.
      //Insertion sort means: shift until you find the spot for the pointer value, then insert.
      if (array[i] > array[key]) {
        [array[key], array[i]] = [array[i], array[key]];
        key = i;
      }
    }

    pointer++;
  }

  return array;
}

//Actual shifting and inserting
//This version is fine.
//However, it introduces the newIndex variable, which is unnecessary,
//because innerIndex+1 is always the right spot for keyElem after decrementing.
function insertionSort2(array) {
  for (let pointer = 1; pointer < array.length; pointer++) {
    let keyElem = array[pointer];
    let innerIndex = pointer - 1;
    let newIndex = undefined;

    while (keyElem < array[innerIndex] && innerIndex >= 0) {
      array[innerIndex + 1] = array[innerIndex];
      newIndex = innerIndex;
      innerIndex--;
    }

    if (newIndex !== undefined) {
      array[newIndex] = keyElem;
    }
  }

  return array;
}

//My final solution
//Without unnecessary variables
//With the actual shift + insert logic of the algorithm.
function insertionSort3(array) {
  for (let pointer = 1; pointer < array.length; pointer++) {
    let keyElem = array[pointer];
    let innerIndex = pointer - 1;

    while (keyElem < array[innerIndex] && innerIndex >= 0) {
      array[innerIndex + 1] = array[innerIndex];
      innerIndex--;
    }

    array[innerIndex + 1] = keyElem;
  }

  return array;
}
