class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let s = 0,
            e = nums.length - 1;
       
        while (s <= e) {
             let mid = Math.floor(s + (e - s) / 2);
            if (nums[mid] === target) return mid;
            if (nums[mid] < target) {
                s = mid + 1;
            } else {
                e = mid - 1;
            }
           
        }
        return s;
    }
}
