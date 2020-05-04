/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    const binary = convertToBinary(num);
    const localArr = [];
    for (let char of binary) {
        char == 1 ? localArr.push(0) : localArr.push(1);
    }
    const result = convertToDecimal(localArr);
    return result;
};

var convertToBinary = function (int) {
    let digits = [];
    if (int == 0) {
        return '0';
    }
    while (int > 0) {
        let digit = int % 2;
        digits.unshift(digit);
        int = Math.floor(int / 2);
    }
    return digits.join('');
}

var convertToDecimal = function (binaryArr) {
    let decimal = 0;

    for (let i = 0; i < binaryArr.length; i++) {
        let j = binaryArr.length - 1 - i;
        decimal += binaryArr[j] * (2 ** i)
    }

    return decimal;
}

module.exports = { findComplement, convertToDecimal, convertToBinary };