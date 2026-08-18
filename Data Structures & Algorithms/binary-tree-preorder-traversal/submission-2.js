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
    preorderTraversal(root) {
        // let res = [];
        // const preorder = (node) => {
        //     if (!node || node === null) {
        //         return;
        //     }
        //     res.push(node.val);
        //     preorder(node.left);
        //     preorder(node.right);
        // };

        // preorder(root);
        // return res;

        //using stack. iterative

        let res = [];
        let st = [];
        if (!root) return [];
        st.push(root);
        while (st.length > 0) {
            let node = st.pop();
            res.push(node.val);
            if (node.right) st.push(node.right);
            if (node.left) st.push(node.left);
        }

        return res;
    }
}
