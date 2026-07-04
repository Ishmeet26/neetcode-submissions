class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let closeToOpen = {
            "]": "[",
            "}": "{",
            ")": "(",
        };
        let stack = [];
        let i = 0;

        while (i < s.length) {
            if (closeToOpen[s[i]]) {
                if (stack.pop() !== closeToOpen[s[i]]) return false;
            } else {
                stack.push(s[i]);
            }
            i++;
        }
        return stack.length === 0;
    }
}
