class Heap {
    constructor(compare) {
        // compare(a, b) should return true if a has higher priority than b
        this.heap = [null];
        this.size = 0;
        this.compare = compare;
    }

    parent(index) {
        return Math.floor(index / 2);
    }

    left(index) {
        return index * 2;
    }

    right(index) {
        return index * 2 + 1;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyUp(index) {
        while (index > 1) {
            const parent = this.parent(index);

            if (this.compare(this.heap[parent], this.heap[index])) {
                break;
            }

            this.swap(parent, index);
            index = parent;
        }
    }

    heapifyDown(index) {
        while (true) {
            let candidate = index;
            const left = this.left(index);
            const right = this.right(index);

            if (left <= this.size && this.compare(this.heap[left], this.heap[candidate])) {
                candidate = left;
            }

            if (right <= this.size && this.compare(this.heap[right], this.heap[candidate])) {
                candidate = right;
            }

            if (candidate === index) break;

            this.swap(index, candidate);
            index = candidate;
        }
    }

    insert(value) {
        this.heap.push(value);
        this.size++;
        this.heapifyUp(this.size);
    }

    remove() {
        if (this.size === 0) return null;

        if (this.size === 1) {
            this.size--;
            return this.heap.pop();
        }

        const top = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.size--;

        this.heapifyDown(1);

        return top;
    }

    peek() {
        return this.size === 0 ? null : this.heap[1];
    }

    isEmpty() {
        return this.size === 0;
    }

    length() {
        return this.size;
    }

    print() {
        console.log(this.heap.slice(1));
    }
}
class MedianFinder {
    constructor() {
        this.small = new Heap((a, b) => a > b); //Max Heap
        this.large = new Heap((a, b) => a < b); //Min Heap
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.small.insert(num);
        if (this.small.peek() > this.large.peek()) {
            this.large.insert(this.small.remove());
        }
        if (this.small.length() > this.large.length() + 1) {
            // move from small  to large
            let val = this.small.remove();
            this.large.insert(val);
        }
        if (this.small.length() + 1 < this.large.length()) {
            // move from large  to small
            let val = this.large.remove();
            this.small.insert(val);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.length() > this.large.length()) {
            return this.small.peek();
        } else if (this.small.length() < this.large.length()) {
            return this.large.peek();
        } else {
            return (this.small.peek() + this.large.peek()) / 2.0;
        }
    }
}
