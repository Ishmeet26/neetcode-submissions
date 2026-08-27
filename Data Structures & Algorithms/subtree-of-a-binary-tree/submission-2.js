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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    isSameTree(nodeP, nodeQ) {
        if (!nodeP && !nodeQ) return true;
        if (!nodeP || !nodeQ) return false;
        if (nodeP.val !== nodeQ.val) {
            return false;
        }

        return this.isSameTree(nodeP.left, nodeQ.left) && this.isSameTree(nodeP.right, nodeQ.right);
    }

    isSubtree(root, subRoot) {
        if (!subRoot) return true;
        if (!root) return false;

        if (this.isSameTree(root, subRoot)) {
            return true;
        }
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
