class MaxHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    insert(val) {
        // Insert at the end
        this.heap.push(val);
        this.size++;

        // Heapify up
        let index = this.size;

        while (index > 1) {
            let parent = Math.floor(index / 2);

            if (this.heap[parent] < this.heap[index]) {
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.size === 0) return null;

        if (this.size === 1) {
            this.size--;
            return this.heap.pop();
        }

        const max = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.size--;

        // Heapify down
        let index = 1;

        while (true) {
            let left = index * 2;
            let right = index * 2 + 1;
            let largest = index;

            if (left <= this.size && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right <= this.size && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];

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
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let count = new Array(26).fill(0);
        for (let task of tasks) {
            count[task.charCodeAt(0) - "A".charCodeAt(0)]++;
        }
        let mHeap = new MaxHeap();
        for (let c of count) {
            if (c > 0) mHeap.insert(c);
        }

        let time = 0;
        let queue = [];
        let front = 0;

        while (mHeap.size > 0 || front < queue.length) {
            time++;

            if (mHeap.size > 0) {
                let cnt = mHeap.remove();
                cnt--;
                if (cnt !== 0) {
                    queue.push([cnt, time + n]);
                }
            }
            if (front < queue.length && queue[front][1] === time) {
                mHeap.insert(queue[front++][0]);
            }
        }
        return time;
    }
}
