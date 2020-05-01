//FIRST BAD VERSION

// You are a product manager and currently leading a team to develop a new product.Unfortunately, the latest version of your product fails the quality check.Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions[1, 2, ..., n]and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad.Implement a function to find the first bad version.You should minimize the number of calls to the API.

//     Example:

// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version. 

//leetcode may day1 - not my solution!!! 


var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1;
        let right = n;
        while (left <= right) {
            let middle = left + Math.floor((right - left) / 2);
            if (isBadVersion(middle)) {
                if ((middle - 1 > 0 && !isBadVersion(middle - 1)) || (middle === 1)) {
                    return middle;
                } else {
                    right = middle - 1;
                }
            } else {
                left = middle + 1;
            }
        }
        return -1;
    };
};