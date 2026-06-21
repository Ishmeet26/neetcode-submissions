class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let remaining = target - nums[i];
            if (map.has(remaining)) {
                return [map.get(remaining), i];
            }

            map.set(nums[i], i);
        }
    }
}
