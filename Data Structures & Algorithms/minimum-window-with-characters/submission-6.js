class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";

        let countT = {},
            window = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let l = 0;
        let have = 0,
            need = Object.keys(countT).length;
        let res = [-1, -1],
            resLen = Infinity;
        console.log(countT, have, need);
        for (let r = 0; r < s.length; r++) {
            let char = s[r];
            window[char] = (window[char] || 0) + 1;

            if (countT[char] && window[char] === countT[char]) {
                have++;
            }

            while (have === need) {
                //update our result
                if (r - l + 1 < resLen) {
                    res = [l, r];
                    resLen = r - l + 1;
                }

                //pop from left
                window[s[l]]--;
                if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
                    have--;
                }
                l++;
            }
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] +1);
    }
}
