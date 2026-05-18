class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0;
        let res = [];

        for (let r = k - 1; r < nums.length; r++) {
            let maxEl = -Infinity;
            for (let i = l; i <= r; i++) {
                maxEl = Math.max(nums[i], maxEl);
            }
            res.push(maxEl);
            l++;
        }
        return res;
    }
}
