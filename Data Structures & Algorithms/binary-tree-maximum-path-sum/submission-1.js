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
        //calc path without splitting;
        function dfs(root) {
            if (!root) return 0;

            //calc left max for left subtree;
            //calc right max for right subtree;
            let leftMax = dfs(root.left);
            let rightMax = dfs(root.right);

            leftMax = Math.max(leftMax, 0); //if max is negative, we are avoiding it
            rightMax = Math.max(rightMax, 0);

            //calc path when you are allowed to split from this node.
            res = Math.max(res, root.val + leftMax + rightMax);

            // return splitting not allowed value;
            return Math.max(leftMax, rightMax) + root.val;
        }

        dfs(root);
        return res;
    }
}
