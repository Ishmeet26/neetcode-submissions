class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";

        for (let s of strs) {
            str = str.concat(s.length + "#", s);
        }
        console.log("encoded", str);
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let len = Number(str.slice(i, j));
            let word = str.slice(j + 1, len + 1 + j);
            res.push(word);
            i = len + 1 + j;
        }

        return res;
    }
}
