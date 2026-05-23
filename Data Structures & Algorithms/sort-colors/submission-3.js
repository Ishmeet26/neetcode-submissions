class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let start = 0,
            mid = 0,
            end = nums.length - 1;

        while (mid <= end) {
            console.log(start, mid, end);
            if (nums[mid] === 2) {
                [nums[mid], nums[end]] = [nums[end], nums[mid]];
                end--;
            } else if (nums[mid] === 0) {
                [nums[mid], nums[start]] = [nums[start], nums[mid]];
                console.log(nums);
                start++;
                mid++
            }else{
                mid++;
            }
      
        }
        return nums;
    }
}
