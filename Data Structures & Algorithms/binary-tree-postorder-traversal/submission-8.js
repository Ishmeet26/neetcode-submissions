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
    postorderTraversal(root) {
        let res = [];
        // const postorder = (node) => {
        //     if (!node || node === null) {
        //         return;
        //     }

        //     postorder(node.left);
        //     postorder(node.right);
        //     res.push(node.val);
        // };

        // postorder(root);

        //just a preorder with reverse order
        // preorder  =  Root, L, R , we first push right then left so to process right later on
        // POST=  L R Root .   its reverse will be Root, right left , so first push left then right
        if (!root) return [];
        let st = [];
        st.push(root);

        while (st.length > 0) {
            let node = st.pop();
            res.push(node.val);
            if (node.left) st.push(node.left);
            if (node.right) st.push(node.right);
        }
        res.reverse();
        return res;
    }
}
