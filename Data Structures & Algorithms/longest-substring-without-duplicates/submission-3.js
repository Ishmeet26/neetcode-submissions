class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set();

        let l = 0;
        let r = 0;
        let res = 0;
        while (r < s.length) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
            }

            charSet.add(s[r]);
            res = Math.max(res, r-l+1);
            r++;
        }
        return res;

    }
}
