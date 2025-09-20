/** The task was:
 * You have a long flowerbed in which some of the plots are planted, and some are not.
 * However, flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's,
 * where 0 means empty and 1 means not empty, and an integer n,
 * return true if n new flowers can be planted in the flowerbed
 * without violating the no-adjacent-flowers rule and false otherwise.
 */

//This was my first solution
//It works, but it is not very clear
//because of the way I handle edge cases
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  //if n is 0, we can always plant 0 flowers
  //so return true
  if (n === 0) return true;

  //if flowerbed has only one plot,
  //we can plant a flower only if that plot is empty
  //and we need to plant only one flower
  if (flowerbed.length === 1) return flowerbed[0] === 0 && n <= 1;

  //if flowerbed has two plots,
  // we can plant a flower only if both plots are empty
  // and we need to plant only one flower
  if (flowerbed.length === 2)
    return flowerbed.every((elem) => elem === 0) && n <= 1;

  //for flowerbeds with more than two plots
  //we can iterate through the flowerbed
  //and check if the current plot and its neighbors are empty
  //if they are, we can plant a flower there
  //so we increment the places counter
  //and skip the next plot by incrementing i
  //because we can't plant a flower in adjacent plots
  let places = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    //handle edge cases for the first and last plots
    if (i === 0) {
      //if the first plot is empty and the next one is also empty
      //we can plant a flower there
      if (flowerbed[i + 1] === 0 && flowerbed[i] === 0) places++;
      i++;
      //there is no need to check further since
      //since we are not at the last plot
      //and we have no left neighbor
      continue;
    }

    //if we are at the last plot
    //we can plant a flower there only if
    //the last plot and its left neighbor are empty
    if (i === flowerbed.length - 1) {
      if (flowerbed[i - 1] === 0 && flowerbed[i] === 0) places++;
      //there is no need to check further since
      //we have no right neighbor
      continue;
    }

    //And finally, for all other plots
    //we can plant a flower if the current plot
    //and its left and right neighbours are empty
    if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      places++;
      i++;
    }
  }
  //if the number of places we can plant flowers
  //is greater than or equal to n, return true
  return places >= n;
}

//The trick was painfully simple
//Just embed the flowerbed with 0s at both ends.
//This way we avoid all edge cases
//And the code becomes much cleaner and easier to read
//We are embedding the flowerbed with neutral plots to the left and right to avoid handling edge cases.
//Then we iterate through the embedded flowerbed
//and check if the current plot and its neighbors are empty,
//if they are, wee increment the places counter and skip the next plot.
//If the number of places we can plant flowers is greater than or equal to n, we return true.
//Otherwise, we return false.
function canPlaceFlowers1(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;

  let places = 0;
  const embeded = [0, ...flowerbed, 0];
  for (let i = 1; i < embeded.length - 1; i++) {
    if (embeded[i - 1] === 0 && embeded[i] === 0 && embeded[i + 1] === 0) {
      places++;
      i++;
      if (places >= n) return true;
    }
  }

  return places >= n;
}
