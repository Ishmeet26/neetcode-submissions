class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    //merge sort
    // mergeArray(nums, low, mid, high) {
    //     let left = low;
    //     let right = mid + 1;
    //     let temp = [];
    //     while (left <= mid && right <= high) {
    //         if (nums[left] <= nums[right]) {
    //             temp.push(nums[left++]);
    //         } else {
    //             temp.push(nums[right++]);
    //         }
    //     }

    //     while (left <= mid) {
    //         temp.push(nums[left++]);
    //     }
    //     while (right <= high) {
    //         temp.push(nums[right++]);
    //     }

    //     let k = 0;
    //     for (let i = low; i <= high; i++) {
    //         nums[i] = temp[k++];
    //     }
    // }
    // mergeSort(nums, low, high) {
    //     if (low >= high) return;
    //     let mid = Math.floor((low + high) / 2);
    //     this.mergeSort(nums, low, mid);
    //     this.mergeSort(nums, mid + 1, high);
    //     this.mergeArray(nums, low, mid, high);
    // }

    //quick sort
    findPartitionIdx(nums, low, high) {
        let pivot = low;
        let i = low;
        let j = high;

        while (i < j) {
            while (nums[i] <= nums[pivot] && i <= high - 1) {
                i++;
            }
            while (nums[j] > nums[pivot] && j >= low - 1) {
                j--;
            }

            if (i < j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
        [nums[pivot], nums[j]] = [nums[j], nums[pivot]];
        return j;
    }

    quickSort(nums, low, high) {
        if (low < high) {
            let partitionIdx = this.findPartitionIdx(nums, low, high);
            this.quickSort(nums, low, partitionIdx - 1);
            this.quickSort(nums, partitionIdx + 1, high);
        }
    }

    sortArray(nums) {
        if (nums.length <= 1) return nums;
        let length = nums.length > 0 ? nums.length - 1 : 0;
        // this.mergeSort(nums, 0, length);
        this.quickSort(nums, 0, length);
        return nums;
    }
}
