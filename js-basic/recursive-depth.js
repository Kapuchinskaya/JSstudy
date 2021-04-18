const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    if (arr.length === 0) {
      return 1;
    }

    let depthArray = [];
    for (let i = 0; i < arr.length; i++) {
      depthArray.push(this.calculateDepth(arr[i]));
    }

    return 1 + Math.max(...depthArray);
  }
};