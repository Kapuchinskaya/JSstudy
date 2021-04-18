const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard
    .reduce((acc, curr) => acc.concat(curr), [])
    .filter((cat) => cat === "^^").length;
};
