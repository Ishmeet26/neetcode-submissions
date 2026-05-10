#include<bits/stdc++.h>
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int , int >mpp;

        for(int i = 0; i<nums.size(); i++){
            int num = nums[i];
            int neededMore = target - num;

            if(mpp.find(neededMore) != mpp.end()){
                return {mpp[neededMore] , i};
            }
            mpp[num]=i;
        }
        return {-1, -1};
    }
};
