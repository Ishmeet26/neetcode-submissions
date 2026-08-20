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
    inorderTraversal(root) {
        // let res = [];

        // function inorder(node) {
        //     if (node === null) {
        //         return;
        //     }
        //     inorder(node.left);
        //     res.push(node.val);
        //     inorder(node.right);
        // }
        // inorder(root);

        // return res;
        let res = [];
        let st = []
        let node = root;
        while (true) {
            if (node !== null) {
                st.push(node);
                node = node.left;
            } else {
                if (st.length === 0) break;
                node = st.pop();
                res.push(node.val);
                node = node.right;
            }
        }
        return res;
    }
}
