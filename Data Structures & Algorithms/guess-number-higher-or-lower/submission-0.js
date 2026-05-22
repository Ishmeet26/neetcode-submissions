/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let s = 1;
        let e = n;
        while (true) {
            let mid = Math.floor(s + (e - s) / 2);
            let res = guess(mid);
            if (res > 0) {
                s = mid + 1;
            } else if (res < 0) {
                e = mid - 1;
            } else {
                return mid;
            }
        }
    }
}
