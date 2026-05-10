class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

            let i =0, 
            n = nums.length - 1;
            while(i<=n){
                if(nums[i] == val){
                    nums[i] = nums[n--];
                }else{
                    i++;
                }
            }
            return n+1;    
           

    }
}
