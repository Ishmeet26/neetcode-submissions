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
        if(root === null) return [];
        let q = [root];
        let front = 0;
        let res = [];

        while (front < q.length) {
            let levelSize = q.length - front;
            let el = q[q.length - 1];
            if (el !== null) res.push(el.val);
            for (let i = 0; i < levelSize; i++) {
                let node = q[front++];
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
        }
        return res;
    }
}
