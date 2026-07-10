class MinStack {
    constructor() {
        this.arr = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
        if (this.min.length > 0) {
            this.min.push(Math.min(val, this.min[this.min.length - 1]));
        } else {
            this.min.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
        if (this.min.length > 0) {
            this.min.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr.length > 0 ? this.arr[this.arr.length - 1] : null;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}
