class MaxHeap {
    constructor() {
        // 1-indexed heap
        this.heap = [null];
    }

    size() {
        return this.heap.length - 1;
    }

    peek() {
        return this.size() ? this.heap[1] : null;
    }

    insert(node) {
        this.heap.push(node);

        let index = this.size();

        // Bubble Up
        while (index > 1) {
            let parent = Math.floor(index / 2);

            if (this.heap[parent].dist < this.heap[index].dist) {
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.size() === 0) return null;

        if (this.size() === 1) {
            return this.heap.pop();
        }

        const max = this.heap[1];

        // Move last element to root
        this.heap[1] = this.heap.pop();

        let index = 1;

        // Bubble Down
        while (true) {
            let left = index * 2;
            let right = index * 2 + 1;
            let largest = index;

            if (left <= this.size() && this.heap[left].dist > this.heap[largest].dist) {
                largest = left;
            }

            if (right <= this.size() && this.heap[right].dist > this.heap[largest].dist) {
                largest = right;
            }

            if (largest !== index) {
                [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
                index = largest;
            } else {
                break;
            }
        }

        return max;
    }
}
class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = new MaxHeap();

        for (let [x, y] of points) {
            let dist =Math.sqrt((x - 0) * (x - 0) + (y - 0) * (y - 0));
            heap.insert({ dist, point: [x, y] });
            if (heap.size() > k) {
                heap.remove();
            }
        }

        let res = [];

        while (heap.size()) {
            res.push(heap.remove().point);
        }
        return res;
    }
}
