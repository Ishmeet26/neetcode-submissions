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
     * @return {number}
     */
    maxDepth(root) {
        // using recursion
        // if(root ===  null) return 0;

        // let lh = this.maxDepth(root.left);
        // let rh = this.maxDepth(root.right);

        // return 1+Math.max(lh,rh);
        if (!root) return 0;
        let ans = 0;
        let front = 0;
        let q = [root];

        while (front < q.length) {
            let levelSize = q.length - front;
            ans++;
            for (let i = 0; i < levelSize; i++) {
                let node = q[front++];
                if (node.left) {
                    q.push(node.left);
                }
                if (node.right) {
                    q.push(node.right);
                }
            }
        }
        return ans;
    }
}
