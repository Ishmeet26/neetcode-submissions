class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    findCombinationSum(idx, nums, target, res, ds) {
        if (idx === nums.length) {
            if (target === 0) {
                res.push([...ds]);
            }
            return;
        }
        if (nums[idx] <= target) {
            ds.push(nums[idx]);
            this.findCombinationSum(idx, nums, target - nums[idx], res, ds);
            ds.pop();
        }
        this.findCombinationSum(idx + 1, nums, target, res, ds);
    }
    combinationSum(nums, target) {
        let res = [];
        let ds = [];
        this.findCombinationSum(0, nums, target, res, ds);
        return res;
    }
}
