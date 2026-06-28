class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;

        let leftMax = height[0];
        let rightMax = height[r];
        let maxWater = 0;

        while (l <= r) {
            //process left
            if (leftMax <= rightMax) {
                maxWater += Math.max(0, leftMax - height[l]);
                leftMax = Math.max(leftMax, height[l]);
                l++;
            } else {
                //process right
                maxWater += Math.max(0, rightMax - height[r]);
                rightMax = Math.max(rightMax, height[r]);
                r--;
            }
        }
        return maxWater;
    }
}
