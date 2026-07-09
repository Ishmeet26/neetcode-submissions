class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        //using two pointers.
        //intuition is, we will move till totallength/2 and search left half of both findMedianSortedArrays

        let total = nums1.length + nums2.length;
        let i = 0;
        let j = 0;
        let prev = 0;
        let curr = 0;

        for (let count = 0; count <= Math.floor(total / 2); count++) {
            prev = curr;

            if (i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])) {
                curr = nums1[i];
                i++;
            } else {
                curr = nums2[j];
                j++;
            }
        }

        if (total % 2 === 0) {
            return (prev + curr) / 2;
        }

        return curr;
    }
}
