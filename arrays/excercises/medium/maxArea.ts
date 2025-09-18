/** The task was:
 * You are given an integer array height of length n. 
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 */

/** The best way to solve this is two pointers approach.
 * We start with two pointers, one at the beginning and one at the end of the array.
 * We calculate the area formed by the lines at the two pointers and update the maximum area if needed.
 * Then we move the pointer pointing to the shorter line towards the other pointer, 
 * hoping to find a taller line that might form a larger area.
 * We repeat this process until the two pointers meet.
 * This approach ensures that we explore all potential containers efficiently in O(n) time complexity.
 */
function maxArea(heights: number[]): number {
    let left = 0;
    let right = heights.length - 1;
    let biggestArea = 0;

    while(left < right){
        const a = right - left;
        const b = Math.min(heights[left], heights[right]);
        const area = a*b;

        if(area > biggestArea)
            biggestArea = area;
        
        heights[left] < heights[right] ? left++ : right--;
    }

 return biggestArea;   
};

/** Function that usesbrute force approach to solve the problem won't be implemented here. */