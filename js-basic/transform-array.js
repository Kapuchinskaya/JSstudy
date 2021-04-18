const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      arrResult.push(null);
      i++;
    } else if (arr[i] === "--discard-prev") {
      arrResult.pop();
    } else if (arr[i] === "--double-next") {
      if (i + 1 <= arr.length) {
        arrResult.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (arrResult.length - 1 >= 0) {
        arrResult.push(arrResult[arrResult.length - 1]);
      }
    } else {
      arrResult.push(arr[i]);
    }
  }

  return arrResult.filter((item) => item !== null && item !== undefined);
};

// check([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]);

/*
[1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
                ['--discard-prev', 1, 2, 3],
                ['--double-prev', 1, 2, 3], --
                [1, 2, 3, '--double-next'],--
                [1, 2, 3, '--discard-next'] 
*/
