// Equilibrium index of an array is an index such that the sum of elements
// at lower indexes is equal to the sum of elements at higher indexes.

// Write a function that given a array of size n, returns an equilibrium
// index (if any) or -1 if no equilibrium indexes exist.

// Example -
// Input : arr = [-7, 1, 5, 2, -4, 3, 0]
// Output : 3
// Explanation: arr[0] + arr[1] + arr[2] = arr[4] + arr[5] + arr[6]

// Implementation
function findEquilibrium(inputArr) {
  // find the sum of array
  let totalSum = 0;
  inputArr.forEach((e) => (totalSum += e));

  // iterate over the array and subtract the
  // current item to get the right subarray sum
  let leftSum = 0;
  for (let i = 0; i < inputArr.length; i++) {
    totalSum -= inputArr[i];
    if (leftSum === totalSum && i !== 0) return i;
    leftSum += inputArr[i];
  }

  return -1;
}

let arr = [-7, 1, 5, 2, -4, 3, -7];
console.log(findEquilibrium(arr));
