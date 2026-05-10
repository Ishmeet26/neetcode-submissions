class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let majEl = null;

        for (let i = 0; i < nums.length; i++) {
            if (count === 0) {
                majEl = nums[i];
            }

            if (majEl === nums[i]) {
                count++;
            } else {
                count--;
            }
        }
        return majEl;
    }
}
