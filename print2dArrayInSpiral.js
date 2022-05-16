// Q. Write a function that should take a 2D matrix as input
//    and return another array which should contain elements
//    traversed in a spiral manner.
// Example -
// Input :  [[1,    2,   3,   4],
//           [5,    6,   7,   8],
//           [9,   10,  11,  12],
//           [13,  14,  15,  16]]
// Output:   [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

// Implementation
function printSpiral(input) {
  let result = [],
    rowStart = 0,
    rowEnd = input.length - 1,
    colStart = 0,
    colEnd = input[0].length - 1;
  while (true) {
    // Left to Right
    for (let i = colStart; i <= colEnd; i++) {
      result.push(input[rowStart][i]);
    }
    rowStart++;
    if (rowStart > rowEnd) {
      return result;
    }
    // Top to Bottom
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(input[i][colEnd]);
    }
    colEnd--;
    if (colEnd < colStart) {
      return result;
    }

    // Right to Left
    for (let i = colEnd; i >= colStart; i--) {
      result.push(input[rowEnd][i]);
    }
    rowEnd--;
    if (rowEnd < rowStart) {
      return result;
    }

    // Bottom to Top
    if (rowEnd > rowStart) {
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(input[i][colStart]);
      }
      colStart++;
    }
    if (colStart > colEnd) {
      return result;
    }
  }
}

// Calling
const inputMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(printSpiral(inputMatrix));
