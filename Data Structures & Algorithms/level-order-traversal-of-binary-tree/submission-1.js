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

class myQueue {
    constructor() {
        this.q = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(x) {
        this.q.push(x);
        this.rear++;
    }

    dequeue() {
        if (this.front === this.rear) return null;
        let val = this.q[this.front];
        delete this.q[this.front++];
        return val;
    }

    peek() {
        return this.front === this.rear ? null : this.q[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];
        if (!root) return res;
        let q = new myQueue();
        q.enqueue(root);
        while (q.size() > 0) {
            let level = [];
            let levelSize = q.size();
            for (let i = 0; i < levelSize; i++) {
                let node = q.dequeue();
                if (node !== null) {
                    level.push(node.val);
                    if (node.left) q.enqueue(node.left);
                    if (node.right) q.enqueue(node.right);
                }
            }
            if (level.length > 0) {
                res.push(level);
            }
        }
        return res;
    }
}
