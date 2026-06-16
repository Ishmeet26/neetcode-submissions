/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];
        let q = [root];
        let front = 0;

        while (front < q.length) {
            let level = [];
            let levelSize = q.length - front;

            for (let i = 0; i < levelSize; i++) {
                let node = q[front++];
                if (node) {
                    level.push(node.val);
                    if (node.left) q.push(node.left);
                    if (node.right) q.push(node.right);
                }
            }
            if (level.length > 0) {
                res.push(level);
            }
        }
        return res;
    }
}
