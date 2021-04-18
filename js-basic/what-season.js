const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //check the date
  if (date === undefined) return "Unable to determine the time of year!";
  if (date === null) return;
  if (Object.prototype.toString.call(date) !== "[object Date]") throw Error;
  
  //transform the date into a string
  const month = date.getMonth();
  switch (true) {
    case (month >= 0 && month <= 1) || month === 11:
      return "winter";
    case month >= 2 && month <= 4:
      return "spring";
    case month >= 5 && month <= 7:
      return "summer";
    case month >= 8 && month <= 10:
      return "autumn";
  }
};
