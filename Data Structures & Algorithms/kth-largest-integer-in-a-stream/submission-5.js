class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    insert(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;

        while (i > 0) {
            // let left = 2*i + 1;
            // let right = 2*i + 2;
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] > this.heap[i]) {
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            }
            i = parent;
        }
    }
    remove() {
        if (this.size() == 0) return null;
        if (this.size() == 1) return this.heap.pop();
        let min = this.heap[0];

        this.heap[0] = this.heap.pop();

        let i = 0;

        while (i < this.size()) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;
            if (left < this.size() && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.size() && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest == i) break;

            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            i = smallest;
        }
        return min;
    }
}
class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = new MinHeap();
        this.k = k;
        for (let n of nums) {
            this.add(n);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.insert(val);

        if (this.minHeap.size() > this.k) {
            this.minHeap.remove();
        }

        return this.minHeap.peek();
    }
}
