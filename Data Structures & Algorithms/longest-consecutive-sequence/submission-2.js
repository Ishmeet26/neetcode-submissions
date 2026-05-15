class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       if(nums.length ===0){
        return 0;
       }

       nums.sort((a,b)=> a-b);
        let prevCurr = 1;
        let curr = 1;
       for(let i = 1 ; i<=nums.length; i++){
        if(nums[i] === nums[i-1]+1){
            curr++;
        }else if(nums[i] === nums[i-1]){
            continue;
        }else if(nums[i] > nums[i-1]+1){
            prevCurr = Math.max(prevCurr, curr);
            curr = 1;
        }

       }
       return Math.max(prevCurr, curr);
    }
}