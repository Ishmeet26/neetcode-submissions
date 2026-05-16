class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0 ;
        let r = heights.length -1;
    let area = 0
        while(l <r){

             let curr = (r - l ) * Math.min(heights[l],heights[r]);
            if(heights[l]<heights[r]){
                l++
            }else{
                r--;
            }
            area = Math.max(curr,area);
        }
        return area;

    }
}
