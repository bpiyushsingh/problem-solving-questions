// Q. Write a function that should take a sorted and then rotated
//    array (rotated from any point and any number of times) and a
//    target value which has to searched upon in the given array and
//    return the index of the target if it is present else return -1.

// Example -
// Input : Array : [4, 5, 6, 7, 0, 1, 2, 3], Target : 2
// Output:   6

// Implementation
function findItem(nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    // Don't use Math.floor as it will break if
    // nums = [3,1], target=1
    let mid = Math.ceil((start + end) / 2);
    if (nums[mid] === target) return mid;

    if (nums[start] < nums[mid]) {
      if (nums[start] <= target && nums[mid - 1] >= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[end] >= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

const inputArray = [6, 7, 0, 1, 2, 3, 4, 5];
console.log(findItem(inputArray, 0));
console.log(findItem(inputArray, 1));
console.log(findItem(inputArray, 2));
console.log(findItem(inputArray, 3));
