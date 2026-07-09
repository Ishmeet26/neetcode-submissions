class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // approach 1 -> using two pointers.
        //intuition is, we will move till totallength/2 and search left half of both findMedianSortedArrays
        // TC -> O(n + m)/2 = O(n+m)
        // let total = nums1.length + nums2.length;
        // let i = 0;
        // let j = 0;
        // let prev = 0;
        // let curr = 0;

        // for (let count = 0; count <= Math.floor(total / 2); count++) {
        //     prev = curr;

        //     if (i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])) {
        //         curr = nums1[i];
        //         i++;
        //     } else {
        //         curr = nums2[j];
        //         j++;
        //     }
        // }

        // if (total % 2 === 0) {
        //     return (prev + curr) / 2;
        // }

        // return curr;

        // approach 2 -> using binary search.
        // intuition is, we can run binary search on 1 array and get the half elements, and we can get
        //other half elements from other array, while checking if our left partition of array is correct
        // if correct, we can return median using first and last elements, or we can correct our partition
        let A = nums1;
        let B = nums2;
        let total = A.length + B.length;
        let half = Math.floor(total / 2);
        if (B.length < A.length) {
            [A, B] = [B, A];
        }

        let l = 0;
        let r = A.length -1;

        while (true) {
            let i = Math.floor((l + r) / 2);
            let j = half - i - 2;

            let Aleft = i >= 0 ? A[i] : -Infinity;
            let Aright = i + 1 < A.length ? A[i + 1] : Infinity;
            let Bleft = j >= 0 ? B[j] : -Infinity;
            let Bright = j + 1 < B.length ? B[j + 1] : Infinity;

            if (Aleft <= Bright && Bleft <= Aright) {
                //valid left partition
                // check for odd or even
                if (total % 2 !== 0) {
                    //odd
                    return Math.min(Aright, Bright);
                } else {
                    return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
                }
            } else if (Aleft > Bright) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
    }
}
