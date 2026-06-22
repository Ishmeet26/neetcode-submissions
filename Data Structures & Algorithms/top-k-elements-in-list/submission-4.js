class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // let freqMap = new Map();

        // for (let n of nums) {
        //     let valFreq = freqMap.get(n) || 0;
        //     freqMap.set(n, valFreq + 1);
        // }

        // return [...freqMap.entries()]
        //     .sort((a, b) => b[1] - a[1]) // sort by frequency
        //     .slice(0, k)
        //     .map(([num]) => num);

        //using bucket sort

        let count = new Map();
        let bucket = new Array(nums.length + 1).fill(null).map(() => []);
        for (let n of nums) {
            count.set(n, (count.get(n) || 0) + 1);
        }

        for (let [num, freq] of count) {
            bucket[freq].push(num);
        }

        let res = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (let num of bucket[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
