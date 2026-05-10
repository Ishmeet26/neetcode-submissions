class Solution {
public:
    int maxArea(vector<int>& heights) {
        int res = 0;
        int start= 0;
        int n = heights.size();
        int end =n-1;

        while(start < end){
            int area = (end - start) * min(heights[start], heights[end]);
            res= max(res, area);

            if(heights[start] <= heights[end]){
                start++;
            }else{
                end--;
            }
        }
        return res;
    }
};
