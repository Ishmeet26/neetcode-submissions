class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    findAllSubsets(idx, nums, res, ds) {
        if (idx >= nums.length) {
            res.push([...ds]);
            return
        }
        ds.push(nums[idx]);
        this.findAllSubsets(idx + 1, nums, res, ds);
        ds.pop();
        this.findAllSubsets(idx + 1, nums, res, ds);
    }
    subsets(nums) {
        let res = [];
        let ds = [];
        this.findAllSubsets(0, nums, res, ds);
        return res;
    }
}
