class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();

        for (let n of nums) {
            let valFreq = freqMap.get(n) || 0;
            freqMap.set(n, valFreq + 1);
        }

        return [...freqMap.entries()]
            .sort((a, b) => b[1] - a[1]) // sort by frequency
            .slice(0, k)
            .map(([num]) => num);
    }
}
