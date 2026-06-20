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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        //using recusive stack , time complexity o(n^2) , space o(n);
        // if (!preorder.length || !inorder.length) return null;

        // let root = new TreeNode(preorder[0]);
        // let mid = inorder.indexOf(preorder[0]);

        // //building left subtree;
        // root.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
        // root.right = this.buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

        // return root;

        //optimisation using hashmap lookup, and index for inorder array insitead of slice

        let preIdx = 0;
        let inOrderMap = new Map();

        for (let i = 0; i < inorder.length; i++) {
            (inOrderMap.set(inorder[i], i));
        }

        function dfs(l, r) {
            if (l > r) return null;
            let rootVal = preorder[preIdx++];
            let root = new TreeNode(rootVal);
            let mid = inOrderMap.get(rootVal);

            root.left = dfs(l, mid - 1);
            root.right = dfs(mid + 1, r);
            return root;
        }

        return dfs(0, inorder.length - 1);
    }
}
