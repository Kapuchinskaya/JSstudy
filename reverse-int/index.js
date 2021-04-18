module.exports = function reverse(n) {
    const adsValue = Math.abs(n);
    const strArray = adsValue.toString().split("");
    strArray.reverse();
    return parseInt(strArray.join(""));
};
