class MaxHeap {
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
            if (this.heap[parent] < this.heap[index]) {
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
        const max = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.size--;
        //make this new root to its correct position by heapify down;
        let index = 1;
        while (index < this.size) {
            let left = 2 * index;
            let right = 2 * index + 1;
            let largest = index;
            if (left <= this.size && this.heap[largest] < this.heap[left]) {
                largest = left;
            }
            if (right <= this.size && this.heap[largest] < this.heap[right]) {
                largest = right;
            }
            if (largest === index) break;
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            index = largest;
        }
        return max;
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
        let heap = new MaxHeap();
        for (let num of nums) {
            heap.insert(num);
        }
        console.log(heap.heap);
        for (let i = 1; i <= k; i++) {
            let el = heap.remove();
            if (i === k) {
                return el;
            }
        }
    }
}
