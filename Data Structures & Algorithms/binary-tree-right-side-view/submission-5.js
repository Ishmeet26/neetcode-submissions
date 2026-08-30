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
     * @return {number[]}
     */
    rightSideView(root) {
        if (root === null) return [];
        let q = [root];
        let front = 0;
        let res = [];

        while (front < q.length) {
            let levelSize = q.length - front;

            for (let i = 0; i < levelSize; i++) {
                let node = q[front++];
                if (i === levelSize - 1) {
                    res.push(node.val);
                }
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
        }
        return res;
    }
}
