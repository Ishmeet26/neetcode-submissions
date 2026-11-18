class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    findSubsets(idx, res, ds, nums){
        if(idx>=nums.length){
            res.push([...ds]);
            return
        }
        ds.push(nums[idx]);
        this.findSubsets(idx+1, res, ds, nums);
        ds.pop();
        this.findSubsets(idx+1, res, ds, nums);
    }
    subsets(nums) {
        let res = [];
        let ds = [];
        this.findSubsets(0, res, ds, nums)
        return res;
    }
}
