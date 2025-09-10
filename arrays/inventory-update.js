//This will work only if arr1 and arr2 do not contain duplicates
// Time complexity O((n + m) log (n + m))
// Space complexity O(n + m)
function updateInventory1(arr1, arr2) {
  const together = [...arr1, ...arr2]; 
  const sorted = together.sort((a, b) => a[1].localeCompare(b[1]));
  const returnValue = [];

  for (let i = 0; sorted.length > i; i++) {
    if (i + 1 < sorted.length) {
      if (sorted[i][1] === sorted[i + 1][1]) {
        returnValue.push([sorted[i][0] + sorted[i + 1][0], sorted[i][1]]);
        i++;
        continue;
      }
    }
    returnValue.push(sorted[i]);
  }

  return returnValue;
}

//This function resolves duplicates problem
// Time complexity O((n + m) log (n + m))
// Space complexity O(n + m)
function updateInventory2(arr1, arr2) {
  const together = [...arr1, ...arr2];
  const map = new Map(); 
  together.forEach((elem) => { 
    map.has(elem[1])
      ? map.set(elem[1], map.get(elem[1]) + elem[0])
      : map.set(elem[1], elem[0]);
  });

  return [...map]
    .map(([key, value]) => [value, key]) 
    .sort((a, b) => a[1].localeCompare(b[1]));}
