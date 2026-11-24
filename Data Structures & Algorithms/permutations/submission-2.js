class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    // approach 1
    // time complexity for this soln, n! x n
    // space complexity for this soln, o(n) + o(n); // for ds, and for freq.
    // recurPermute(nums, ds, ans, freq) {
    //     if (ds.length === nums.length) {
    //         ans.push([...ds]);
    //         return;
    //     }
    //     for (let i = 0; i < nums.length; i++) {
    //         if (!freq[i]) {
    //             freq[i] = true;
    //             ds.push(nums[i]);
    //             this.recurPermute(nums, ds, ans, freq);
    //             ds.pop();
    //             freq[i] = false;
    //         }
    //     }
    // }

    // approach 2 swapping approach
    // time complexity for this soln, n! x n
    // space complexity for this soln, o(1);

    recurPermute(idx, nums, ans) {
        if (idx === nums.length) {
            ans.push([...nums]);
            return;
        }
        for (let i = idx; i < nums.length; i++) {
            //swapping
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            this.recurPermute(idx + 1, nums, ans);
            //reswap for backtrack , undo your swap;
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
        }
    }

    permute(nums) {
        let ans = [];
        // let ds = [];
        // let freq = [];
        // this.recurPermute(nums, ds, ans, freq);
        this.recurPermute(0, nums, ans);
        return ans;
    }
}
