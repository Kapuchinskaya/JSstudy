const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) return false;
  return members
    .map((name) =>
      typeof name === "string" ? name.trim().slice(0, 1).toUpperCase() : ""
    )
    .sort()
    .join("");
};
