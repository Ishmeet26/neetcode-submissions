class MaxHeap {
    constructor() {
        // 1-indexed heap
        this.heap = [null];
    }

    // Returns number of elements
    size() {
        return this.heap.length - 1;
    }

    // Returns max element
    peek() {
        if (this.size() === 0) return null;
        return this.heap[1];
    }

    // Insert a new value
    insert(value) {
        this.heap.push(value);

        let index = this.size();

        while (index > 1) {
            let parent = Math.floor(index / 2);

            if (this.heap[parent] >= this.heap[index]) break;

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    // Remove and return max element
    remove() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        let max = this.heap[1];

        // Move last element to root
        this.heap[1] = this.heap.pop();

        let index = 1;

        while (true) {
            let left = index * 2;
            let right = index * 2 + 1;
            let largest = index;

            if (left <= this.size() && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right <= this.size() && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];

            index = largest;
        }

        return max;
    }

    // Build heap from array in O(n)
    buildHeap(arr) {
        this.heap = [null, ...arr];

        for (let i = Math.floor(this.size() / 2); i >= 1; i--) {
            this.heapify(i);
        }
    }

    // Heapify from a given index
    heapify(index) {
        while (true) {
            let left = index * 2;
            let right = index * 2 + 1;
            let largest = index;

            if (left <= this.size() && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right <= this.size() && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }

    print() {
        console.log(this.heap.slice(1));
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let heap = new MaxHeap();

        for (let s of stones) {
            heap.insert(s);
        }
        
        while(heap.heap.length > 2){
            let firstMax = heap.remove();
            let secondMax = heap.remove();

            let diff = firstMax - secondMax;
            if(diff > 0){
                heap.insert(diff);
            }
        }

        return heap.heap[1] || 0


    }
}
