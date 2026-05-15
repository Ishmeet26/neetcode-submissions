class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let res = new Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        let postfix = 1;

        for (let i = n - 1; i >= 0; i--) {
            res[i] = res[i] * postfix;
            postfix = postfix * nums[i];
        }
        return res;
    }
}
