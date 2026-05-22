class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let s = 0;
        let e = nums.length - 1;

        while (s <= e) {
            let mid = Math.floor(s + (e - s) / 2);
            if (target === nums[mid]) return mid;
            if (nums[s] <= nums[mid]) {
                //left half sorted
                if (target >= nums[s] && target < nums[mid]) {
                    e = mid - 1;
                } else {
                    s = mid + 1;
                }
            } else {
                // right half sorted
                if (target > nums[mid] && target <= nums[e]) {
                    s = mid + 1;
                } else {
                    e = mid - 1;
                }
            }
        }
        return -1;
    }
}
