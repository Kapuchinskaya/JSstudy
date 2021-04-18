const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(value);
    return this;
  },
  removeLink(position) {
    try {
      if (typeof position !== "number" || position < 0 || position > this.result.length) {
        this.result = [];
        throw new Error();
      }

      this.result.splice(position - 1, 1);
      return this;
    }
    catch (ex) {
      throw new Error();
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const finishedChain = this.result.map(item => `( ${item} )`).join("~~");
    this.result = [];
    return finishedChain;
  }
};

module.exports = chainMaker;