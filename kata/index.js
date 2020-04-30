const rotateArr = (arr) => {
    const localArr = [...arr];
    for (let i = 0; i < k; i++) {
        let item = localArr.pop()
        localArr.unshift(item);
    }
    return localArr;
}

const checkArgs = (arr, k) => {
    if (!Array.isArray(arr)) throw TypeError('Wrong type');
    if (!typeof k !== 'number') throw TypeError('Wrong type');
    return true;
}
const runChallenge = (arr = [], k) => {

    return checkArgs(arr, k) ? rotateArr(arr, k) : false;
}

runChallenge(10);
module.exports = {
    runChallenge, rotateArr
}