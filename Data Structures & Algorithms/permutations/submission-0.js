class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    recurPermute(nums, ds, ans, freq) {
        if (ds.length === nums.length) {
            ans.push([...ds]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!freq[i]) {
                freq[i] = true;
                ds.push(nums[i]);
                this.recurPermute(nums, ds, ans, freq);
                ds.pop();
                freq[i] = false;
            }
        }
    }
    permute(nums) {
        let ans = [];
        let ds = [];
        let freq = [];
        this.recurPermute(nums, ds, ans, freq);
        return ans;
    }
}
