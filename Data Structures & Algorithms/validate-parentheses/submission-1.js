class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let closeToOpen = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        for (let i = 0; i < s.length; i++) {
            //closing parenthesis
            if(s[i] in closeToOpen){
                if(stack[stack.length - 1] === closeToOpen[s[i]]){
                    stack.pop();
                }else{
                    return false;
                }
            }else{
                stack.push(s[i]);
            }
        }
       return stack.length === 0;
    }
}
