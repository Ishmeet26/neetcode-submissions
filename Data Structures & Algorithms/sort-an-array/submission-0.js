class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    mergeArray(nums, low, mid, high) {
        let left = low;
        let right = mid + 1;
        let temp = [];
        while (left <= mid && right <= high) {
            if (nums[left] <= nums[right]) {
                temp.push(nums[left++]);
            } else {
                temp.push(nums[right++]);
            }
        }

        while (left <= mid) {
            temp.push(nums[left++]);
        }
        while (right <= high) {
            temp.push(nums[right++]);
        }

        let k = 0;
        for (let i = low; i <= high; i++) {
            nums[i] = temp[k++];
        }
    }
    mergeSort(nums, low, high) {
        if (low >= high) return;
        let mid = Math.floor((low + high) / 2);
        this.mergeSort(nums, low, mid);
        this.mergeSort(nums, mid + 1, high);
        this.mergeArray(nums, low, mid, high);
    }
    sortArray(nums) {
        let length = nums.length > 0 ? nums.length - 1 : 0;
        this.mergeSort(nums, 0, length);
        return nums;
    }
}
