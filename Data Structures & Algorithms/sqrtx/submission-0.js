class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x === 0) return 0;
        let s = 1;
        let e = Math.ceil(x / 2);
        let ans = 0;;
        while (s <= e) {
            let mid = Math.floor(s + (e - s) / 2);
            console.log(mid);
            if (mid * mid === x ) {
                return mid;
            }
            if (mid * mid < x) {
                ans = mid;
                s = mid + 1;
            } else {
                e = mid - 1;
            }
        }
        return ans;
    }
}
