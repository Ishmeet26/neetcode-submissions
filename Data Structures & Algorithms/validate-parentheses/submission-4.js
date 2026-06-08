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

        for (let b of s) {
            let peek = stack[stack.length - 1];
            if (b === "]") {
                let open = closeToOpen[b];
                if (open === peek) {
                    stack.pop();
                } else {
                    return false;
                }
            } else if (b === "}") {
                let open = closeToOpen[b];
                if (open === peek) {
                    stack.pop();
                } else {
                    return false;
                }
            } else if (b === ")") {
                let open = closeToOpen[b];
                if (open === peek) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(b);
            }
        }
        return stack.length === 0;
    }
}
