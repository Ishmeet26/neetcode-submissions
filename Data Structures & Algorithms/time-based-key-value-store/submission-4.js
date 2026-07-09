class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
        console.log(this.keyStore);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";
        let list = this.keyStore.get(key);
        if (list.length === 0) return "";
        let l = 0;
        let r = list.length - 1;
        let res = "";
        while (l <= r) {
            let mid = Math.floor(l + (r - l) / 2);
            if (list[mid][1] === timestamp) {
                return list[mid][0];
            } else if (list[mid][1] < timestamp) {
                res = list[mid][0];
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return res;
    }
}
