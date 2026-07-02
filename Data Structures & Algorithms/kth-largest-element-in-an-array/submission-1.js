class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    insert(val) {
        //insert at last;
        this.heap.push(val);
        // increase the size
        this.size++;
        //insert this element in its correct position
        let index = this.size;

        while (index > 1) {
            let parent = Math.floor(index / 2);
            if (this.heap[parent] > this.heap[index]) {
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            } else {
                return;
            }
        }
    }

    remove() {
        if (this.size === 0) return null;

        if (this.size === 1) {
            this.size--;
            return this.heap.pop();
        }
        // step1 swap last el with root;
        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.size--;
        //make this new root to its correct position by heapify down;
        let index = 1;
        while (index < this.size) {
            let left = 2 * index;
            let right = 2 * index + 1;
            let smallest = index;
            if (left <= this.size && this.heap[smallest] > this.heap[left]) {
                smallest = left;
            }
            if (right <= this.size && this.heap[smallest] > this.heap[right]) {
                smallest = right;
            }
            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
        return min;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[1];
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new MinHeap();

        for (const num of nums) {
            heap.insert(num);

            if (heap.size > k) {
                heap.remove(); // Remove the smallest
            }
        }

        return heap.peek(); // kth largest
    }
}
