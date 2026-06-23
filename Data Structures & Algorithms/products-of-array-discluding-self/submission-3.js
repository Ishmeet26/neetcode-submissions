class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = new Array(nums.length).fill(1);

        for (let i = 1; i<nums.length; i++){
            res[i] = res[i-1] * nums[i-1];
        }

        console.log("prefix " , res);

        let postfix= 1;
        for(let i = nums.length-1 ; i >=0; i--){
            res[i] = postfix * res[i];
            postfix*=nums[i];
        }
    console.log(res);
return res;

    }
}
