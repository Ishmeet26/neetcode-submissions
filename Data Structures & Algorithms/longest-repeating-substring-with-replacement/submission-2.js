class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {};
        let l = 0;
        let res = 0;
        let maxf = 0;
        for (let r = 0; r < s.length; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1;
            maxf = Math.max(count[s[r]], maxf);
            while (r - l + 1 - maxf > k) {
                count[s[l]] -= 1;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
