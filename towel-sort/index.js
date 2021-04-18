// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    let concatArray = [];

    for (i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            concatArray = concatArray.concat(matrix[i]);
        } else {
            concatArray = concatArray.concat(matrix[i].reverse());
        }
    }

    return concatArray;
};
