class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    //    if(nums.length ===0){
    //     return 0;
    //    }

    //    nums.sort((a,b)=> a-b);
    //     let prevCurr = 1;
    //     let curr = 1;
    //    for(let i = 1 ; i<nums.length; i++){
    //     if(nums[i] === nums[i-1]+1){
    //         curr++;
    //     }else if(nums[i] === nums[i-1]){
    //         continue;
    //     }else if(nums[i] > nums[i-1]+1){
    //         prevCurr = Math.max(prevCurr, curr);
    //         curr = 1;
    //     }

    //    }
    //    return Math.max(prevCurr, curr); TC = nlogn

    // using set in o(n) TC, and o(n) MC

        let numSet  = new Set(nums);
        let longest = 0;

        for(let num of nums){
            if(!numSet.has(num[num-1])){
                let length = 1;
                while(numSet.has(num+length)){
                    length++;
                }
                longest =Math.max(length, longest);
            }

        }
        return longest;

    }
}