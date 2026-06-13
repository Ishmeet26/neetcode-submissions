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
        // const res = [];

        // const InOrder = (node) => {
        //     if (node === null) {
        //         return;
        //     }

            
        //     InOrder(node.left);
        //     res.push(node.val);
        //     InOrder(node.right);
        // };

        // InOrder(root);
        // return res;

        let res = [];
        let stack = [];
        let curr = root;
        while(curr || stack.length>0){
            while(curr){
                stack.push(curr);
                curr = curr.left
            }
            curr =stack.pop();
            res.push(curr.val);
            curr = curr.right;
        }
        return res;


    }
}
