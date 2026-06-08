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
                if (stack[stack.length - 1] !== closeToOpen[ch]) {
                    return false;
                } else {
                    stack.pop();
                }
            } else {
                stack.push(ch);
            }
        }
       return stack.length === 0;
    }
}
