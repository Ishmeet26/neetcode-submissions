class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    findSubsets(idx , nums, res, ds){
       
            res.push([...ds]);
        

        for(let i = idx; i < nums.length; i++ ){
            if(i > idx && nums[i] === nums[i-1]) continue;
            ds.push(nums[i]);
            this.findSubsets(i+1, nums, res, ds);
            ds.pop();
        }
    }

    subsetsWithDup(nums) {
        let res = [];
        let ds = [];
        nums.sort((a,b)=> a-b);
        this.findSubsets(0, nums, res, ds);
        return res;
    }
}
