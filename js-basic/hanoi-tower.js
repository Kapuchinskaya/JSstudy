const CustomError = require("../extensions/custom-error");

function calculateTurns(disksNumber) {
  return disksNumber === 1 ? 1 : 2 * calculateTurns(disksNumber - 1) + 1;
}
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = calculateTurns(disksNumber);
  const seconds = Math.floor((turns * 3600) / turnsSpeed);
  return { turns, seconds };
};
