class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        let arr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)]);
        arr.sort((a, b) => b[0] - a[0]);

        return arr.slice(0, k).map((pair) => pair[1]);
    }
}
