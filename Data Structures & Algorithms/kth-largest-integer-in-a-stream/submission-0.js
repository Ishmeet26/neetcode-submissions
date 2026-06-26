class customMinHeap {
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

        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] > this.heap[index]) {
                [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

                index = parent;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < this.size() && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < this.size() && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] =
            [this.heap[smallest], this.heap[i]];

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
        this.minHeap = new customMinHeap();
        this.k = k
        for(let num of nums){
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.insert(val);
        if(this.minHeap.size() > this.k){
            this.minHeap.remove();
        }
        return this.minHeap.peek();

    }
}
