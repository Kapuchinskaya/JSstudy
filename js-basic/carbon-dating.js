const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;

  const sampleActivityValue = parseFloat(sampleActivity);

  if (typeof sampleActivityValue !== "number"
    || isNaN(sampleActivityValue)
    || sampleActivityValue > MODERN_ACTIVITY
    || sampleActivityValue <= 0) return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityValue) / (Math.log(2) / HALF_LIFE_PERIOD));
};