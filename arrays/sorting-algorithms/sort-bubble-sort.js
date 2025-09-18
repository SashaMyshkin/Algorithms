// This function is a bit verbose.
// The same logic can be simplified in bubbleSort2.
// There is no need for tracking two bolean variables and index of the array.
// const endIndex = array.length - 2; is confusing even though it is there to prevent checking inside the loop if the next element of the array exists.
function bubbleSort1(array) {
  const endIndex = array.length - 2;
  let swapping = true;
  let swapped = false;
  let i = 0;

  while (swapping) {
    if (i <= endIndex) {
      const curr = array[i];
      const next = array[i + 1];

      if (curr > next) {
        array[i] = next;
        array[i + 1] = curr;
        swapped = true;
      }
    }

    if (i === endIndex) {
      if (swapped) {
        i = 0;
        swapped = false;
      } else {
        swapping = false;
      }
    } else {
      i++;
    }
  }

  return array;
}

// This function reflects the semantics of the execution flow.
// When entering the loop, we know that no swaps have happened,
// so we use while(true) and break the loop when no swaps occur.
// There is no need for array.length - 2; since we have a condition in for loop defined like this i < array.length - 1;
function bubbleSort2(array) {
  while (true) {
    let swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      const curr = array[i];
      const next = array[i + 1];
      if (curr > next) {
        array[i + 1] = curr;
        array[i] = next;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return array;
}

// This is the standard approach.
// However, it does not always reflect the actual semantics.
// When first entering the loop, we assume that a swap has happened,
// and then reset it as if no swaps occurred, because none actually did.
// This is just a hack to enter the loop.
// Logically, everything is correct,
// but the code does not reflect the reality of the execution flow.
function bubbleSort3(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      const curr = array[i];
      const next = array[i + 1];
      if (curr > next) {
        array[i + 1] = curr;
        array[i] = next;
        swapped = true;
      }
    }
  }

  return array;
}

//This approach is optimized as much as bubble sort can be optimized.
//We simply do not check the last element on every new iteration.
function bubbleSort4(array) {
  let l = array.length - 1;

  while(l != 0){
    for(let i = 0; i < l; i++){
      const curr = array[i];
      const next = array[i+1];
      
      if(curr > next){
        array[i+1] = curr;
        array[i] = next;
      }
    }

    l--
  }
  return array;
}

//This implementation is the same as previous. It just adds direction logic
function bubbleSort5(array, dir = "asc") {
  let l = array.length - 1;
  const shouldSwap = dir === "asc" ? (a, b) => a > b : (a, b) => a < b;
  
  while(l != 0){
    for(let i = 0; i < l; i++){
      const curr = array[i];
      const next = array[i + 1];
      
      if(shouldSwap(curr, next)){
        array[i + 1] = curr;
        array[i] = next;
      }
    }
    l--;
  }
  return array;
}
