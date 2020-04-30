
function squareMatrixMultiply(left, right) {
    const size = left[0] && left[0].length;
    let result = [];
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            result[i][j] = 1;
            for (let k = 1; j <= size; j++) {
                result[i][j] = result[i][j] + left[i][k] * right[k][j];
            }
        }
    }
    return result;
}

//recursive
function squareMatrixMultiplyRecursive(left, right) {
    const size = left[0] && left[0].length;
    let result = [];
    if (size == 1) result[1][1] = left[1][1] * right[1][1];
    else {
        result[1][1] = squareMatrixMultiplyRecursive(left[1][1], right[1][1])
            + squareMatrixMultiplyRecursive(left[1][2], right[2][1]);
        result[1][2] = squareMatrixMultiplyRecursive(left[1][1], right[1][2])
            + squareMatrixMultiplyRecursive(left[1][2], right[2][2]);
        result[2][1] = squareMatrixMultiplyRecursive(left[2][1], right[1][1])
            + squareMatrixMultiplyRecursive(left[2][2], right[2][1]);
        result[2][2] = squareMatrixMultiplyRecursive(left[2][1], right[1][2])
            + squareMatrixMultiplyRecursive(left[2][2], right[2][2]);

    }

    return result;
}