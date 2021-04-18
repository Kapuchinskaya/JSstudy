var numbersFromOneToNineteen = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
var tensNumbersFromTwentyToNinety = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    var numString = number.toString();

    if (number < 20) {
        return numbersFromOneToNineteen[number];
    }

    if (numString.length === 2) {
        return `${tensNumbersFromTwentyToNinety[numString[0]]} ${
            numbersFromOneToNineteen[numString[1]]
        }`.trim();
    }

    if (numString.length === 3) {
        if (numString[1] === "0" && numString[2] === "0")
            return `${numbersFromOneToNineteen[numString[0]]} hundred`;
        else {
            const tensString = toReadable(
                parseInt(numString[1] + numString[2])
            );
            return `${
                numbersFromOneToNineteen[numString[0]]
            } hundred ${tensString}`.trim();
        }
    }
};
