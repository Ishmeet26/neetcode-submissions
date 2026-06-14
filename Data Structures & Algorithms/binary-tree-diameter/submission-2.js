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

    // findHeight(node) {
    //     if (node === null) return 0;

    //     let lh = this.findHeight(node.left);
    //     let rh = this.findHeight(node.right);

    //     return 1 + Math.max(lh, rh);
    // }

    diameterOfBinaryTree(root) {
        // if (root === null) return 0;

        // let lh = this.findHeight(root.left);
        // let rh = this.findHeight(root.right);

        // let currDiameter = lh + rh;

        // let leftDiameter = this.diameterOfBinaryTree(root.left);
        // let rightDiameter = this.diameterOfBinaryTree(root.right);

        // return Math.max(currDiameter, leftDiameter, rightDiameter);

        //
        let dia = 0;

        const height = (root) => {
            if(root === null ) return 0;

            let lh = height(root.left);
            let rh = height(root.right);
            dia = Math.max(dia, lh+rh);
            return 1+Math.max(lh,rh);
        };
        height(root);

        return dia;
    }
}
