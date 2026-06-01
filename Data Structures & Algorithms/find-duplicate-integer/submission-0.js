class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let visited = new Set();

        for(let val of nums){
            if(visited.has(val)){
                return val;
            }

            visited.add(val);
        }
    }
}
