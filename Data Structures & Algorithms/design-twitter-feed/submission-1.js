class MaxHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    heapifyUp(index) {
        while (index > 1) {
            let parent = Math.floor(index / 2);

            if (this.heap[parent][0] >= this.heap[index][0]) break;

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    heapifyDown(index) {
        while (true) {
            let left = index * 2;
            let right = index * 2 + 1;
            let largest = index;

            if (left <= this.size && this.heap[left][0] > this.heap[largest][0]) {
                largest = left;
            }

            if (right <= this.size && this.heap[right][0] > this.heap[largest][0]) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }

    insert(val) {
        this.heap.push(val);
        this.size++;

        this.heapifyUp(this.size);
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

        this.heapifyDown(1);

        return max;
    }

    peek() {
        return this.size === 0 ? null : this.heap[1];
    }

    isEmpty() {
        return this.size === 0;
    }
}
class Twitter {
    constructor() {
        this.count = 0;
        this.tweetMap = new Map(); //userId : [count, tweetId]
        this.followMap = new Map(); //followerId : set() with followeeId
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, []);
        }
        this.tweetMap.get(userId).push([this.count++, tweetId]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let res = [];
        if (!this.followMap.has(userId)) {
            this.followMap.set(userId, new Set());
        }
        this.followMap.get(userId).add(userId);
        let heap = new MaxHeap();
        for (let followeeId of this.followMap.get(userId)) {
            if (this.tweetMap.has(followeeId)) {
                let tweets = this.tweetMap.get(followeeId);
                let index = tweets.length - 1;
                let [count, tweetId] = tweets[index];
                heap.insert([count, tweetId, followeeId, index - 1]);
            }
        }

        while (res.length < 10 && !heap.isEmpty()) {
            let [count, tweetId, followeeId, nextIndex] = heap.remove();
            res.push(tweetId);
            if (nextIndex >= 0) {
                const [prevCount, prevTweetId] = this.tweetMap.get(followeeId)[nextIndex];
                heap.insert([prevCount, prevTweetId, followeeId, nextIndex - 1]);
            }
        }
        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }
        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
