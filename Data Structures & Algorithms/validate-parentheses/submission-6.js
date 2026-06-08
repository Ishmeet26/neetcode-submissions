class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (let ch of s) {
            if (closeToOpen[ch]) {
                if (stack.pop() !== closeToOpen[ch]) return false;
            } else {
                stack.push(ch);
            }
        }
        return stack.length === 0;
    }
}
