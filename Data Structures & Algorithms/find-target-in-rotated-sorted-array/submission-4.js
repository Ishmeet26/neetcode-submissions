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
            let mid = Math.floor(s+(e-s)/2);
            if(nums[mid] === target){
                return mid;
            }
            //left part is sorted
            if(nums[s] <= nums[mid]){

                if(target > nums[mid] || target < nums[s]){
                    s = mid+1
                }else{
                    e = mid-1
                }


            }else{
            //right is not sorted;
                if(target < nums[mid] || target > nums[e] ){
                    e = mid-1
                }else{
                    s = mid+1
                }

            }

        }
        return -1;
    }
}
