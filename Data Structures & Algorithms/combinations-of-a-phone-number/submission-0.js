class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let res = [];
        if (digits.length === 0) return res;
        let digitToLetter = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };

        function backtrack(digitIdx, currStrBuilder) {
            if (digitIdx === digits.length) {
                res.push(currStrBuilder);
                return;
            }
            for (let c of digitToLetter[digits[digitIdx]]) {
                backtrack(digitIdx + 1, currStrBuilder + c);
            }
        }
        backtrack(0, "");
        return res;
    }
}
