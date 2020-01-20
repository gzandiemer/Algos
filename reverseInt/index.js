// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9




//a long solution

function reverseInt1(n) {
    //convert n to string and to array and reverse and back to string => if negative sign will be gone 
    const reversed = n.toString().split('').reverse().join('');

    if (n < 0) {
        return parseInt(reversed) * -1;
    } else {
        return parseInt(reversed);
    }
}

// the same solution with an alternative for negating the number
function reverseInt2(n) {
    //convert n to string and to array and reverse and back to string 
    const reversed = n.toString().split('').reverse().join();


    //when you make this string parseInt, then all the signs and zeros at the beginnings will be gone anyway
    return parseInt(reversed) * Math.sign(n);
}

//one line version of above solution
function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}



//my solution (also correct but sicne I dont parse it to int right away I unnecessarily dealt with the zeros and '-' problem )
function reverseIntMySolution(n) {

    //remarks 1 - zeros in the end should run, 2- minus in the beginning stay as minus 3- minus and zeros in the beginning 

    //convert the number into string and then to array to reverse it
    let reversed = n.toString().split('').reverse();
    // remove all the 0s in the beginning of the reversed array if there are
    while (i = 0) {
        if (reverse[i] === 0) {
            reverse.split(i);
        } else {
            break;
        }
    }
    //now that the zeros are dealt with fiy negative sign if n is negative
    if (n < 0) {
        reversed.pop();
        reversed.unshift('-');
    }
    //convert the array into string and then to integer
    return parseInt(reversed.join(''));

}

module.exports = reverseInt;