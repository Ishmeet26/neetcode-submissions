class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let res = nums[0];

        while (l <= r) {
            if (nums[l] <= nums[r]) {
                res = Math.min(res, nums[l]);
                break;
            }

            let mid = Math.floor(l + (r - l) / 2);
            res = Math.min(res, nums[mid]);
            if (nums[mid] >= nums[l]) {
                //already sorted search right
                l = mid + 1;
            } else {
                //search left
                r = mid - 1;
            }
        }
        return res;
    }
}
