/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */ 0;

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let res = root.val;
        function dfs(root) {
            if (!root) return 0;

            let leftMax = dfs(root.left);
            let rightMax = dfs(root.right);
            leftMax = Math.max(leftMax, 0);
            rightMax = Math.max(rightMax, 0);
            //calc max value if we are allowed to split from this node;
            res = Math.max(res, root.val + leftMax + rightMax);
            //calc and return max value if we are not allowed to split from this node;
            // we are not splitting from this node is because we want to return a value to its parent, and parent was allowed to split
            return root.val + Math.max(leftMax, rightMax);
        }

        dfs(root);
        return res;
    }
}
