class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let res = 0;
        let l = 0;
        let r = 0;
        while (r < s.length) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            while ((r - l + 1) - Math.max(...count.values()) > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, r - l + 1);
            r++;
        }
        return res;
    }
}
