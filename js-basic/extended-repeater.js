const CustomError = require("../extensions/custom-error");

const repeatedString = function repeatingCycle(base, separator, times) {
  const rawString = (base ? base.concat(separator) : "").repeat(
    times ? times : 1
  );
  return rawString.slice(0, rawString.length - separator.length);
};

module.exports = function repeater(str, options) {
  let addition = "";
  if (options.addition === null) {
    addition = "null";
  } else if (options.addition === undefined) {
    addition = options.addition;
  } else if (typeof options.addition === "object") {
    if (
      {}.toString.call(options.addition[Symbol.toPrimitive]) ===
      "[object Function]"
    ) {
      addition = options.addition[Symbol.toPrimitive]();
    } else {
      addition = options.addition.toString();
    }
  } else {
    addition = options.addition.toString();
  }

  const additions = repeatedString(
    addition,
    options.additionSeparator ? options.additionSeparator : "|",
    options.additionRepeatTimes
  );

  if (str === null) {
    str = "null";
  } else if (typeof str === "object") {
    if ({}.toString.call(str[Symbol.toPrimitive]) === "[object Function]") {
      str = str[Symbol.toPrimitive]();
    } else {
      str = str.toString();
    }
  }

  str =
    str !== undefined ? str.toString().concat(additions ? additions : "") : str;

  return repeatedString(
    str, //??
    options.separator ? options.separator : "+",
    options.repeatTimes
  );
};
