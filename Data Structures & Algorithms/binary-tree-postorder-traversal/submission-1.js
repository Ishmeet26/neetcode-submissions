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
        // const res = [];

        // const postOrder = (node) => {
        //     if (node === null) {
        //         return;
        //     }

        //     postOrder(node.left);
        //     postOrder(node.right);
        //     res.push(node.val);
        // };

        // postOrder(root);
        // return res;
        //approach 2
        // let stack = [];
        // let res = [];
        // let curr = root;

        // while (curr || stack.length > 0) {
        //   if(curr){
        //     res.push(curr.val);
        //     stack.push(curr);
        //     curr = curr.right;
        //   }else{
        //     curr = stack.pop();
        //     curr = curr.left
        //   }
        // }

        // return res.reverse();

        // approach 3.

        let res = [];
        let stack = [];

        let curr = root;
        while (stack.length > 0 || curr) {
            if (curr) {
                stack.push(curr);
                curr = curr.left;
            } else {
                let temp = stack[stack.length - 1].right;
                if (temp === null) {
                    temp = stack[stack.length - 1];
                    stack.pop();
                    res.push(temp.val);
                    //checking root
                    while (stack.length > 0 && temp === stack[stack.length - 1].right) {
                        temp = stack[stack.length - 1];
                        stack.pop();
                        res.push(temp.val);
                    }
                } else {
                    curr = temp;
                }
            }
        }
        return res;
    }
}
