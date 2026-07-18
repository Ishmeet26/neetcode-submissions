class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        //only add open parenthesis if open <n ;
        // only add closing if close < open;
        // open === close === n push to stack
        let stack = [];
        let ans = [];

        function backtrack(open, close) {
            if (open === close && open === n && close === n) {
                ans.push(stack.join(""));
                return;
            }

            if (open < n) {
                stack.push("(");
                backtrack(open + 1, close);
                stack.pop();
            }

            if (close < open) {
                stack.push(")");
                backtrack(open, close + 1);
                stack.pop();
            }
        }

        backtrack(0, 0);

        return ans;
    }
}
