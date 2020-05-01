const rotateArray = (arr, k) => {
    if (k == 0 || Math.abs(k) == arr.length) return arr;
    const localArr = [...arr];
    let steps = Math.abs(k);
    for (let i = 1; i <= steps; i++) {
        k > 0 ? localArr.unshift(localArr.pop()) : localArr.push(localArr.shift());
    }
    return localArr;
};

const checkArgs = (arr, k) => {
    if (!Array.isArray(arr)) throw TypeError('First argument: wrong type');
    if (typeof k !== 'number') throw TypeError('Second argument: wrong type');
    return true;
}

const runChallenge = (arr = [], k) => {
    return checkArgs(arr, k) ? rotateArray(arr, k) : false;
}

module.exports = {
    runChallenge,
    rotateArray,
};