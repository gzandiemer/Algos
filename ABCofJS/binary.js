//check if there is a better way to do this convert

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