class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        vector<int>& A = nums1;
        vector<int>& B = nums2;

        int total = A.size() + B.size();
        int half = (total + 1) / 2;
        
        if(B.size() < A.size()){
            swap(A, B);
        }

        int l = 0;
        int r = A.size();

        while(l<=r){
            int i = l + (r - l) / 2;
            int j = half - i;
            
            int ALeft = (i > 0) ? A[i-1] : INT_MIN;
            int ARight = (i < A.size()) ? A[i] : INT_MAX;
            int BLeft = (j > 0) ? B[j-1] : INT_MIN;
            int BRight = (j < B.size()) ? B[j] : INT_MAX;


            if(ALeft <= BRight && BLeft <= ARight){
                if(total % 2 !=0){
                    //odd
                  return max(ALeft, BLeft); 
                }
                return (max(ALeft, BLeft) + min(ARight, BRight)) / 2.0;
            }else{
                if(ALeft > BRight){
                    r = i-1;
                }else{
                    l = i+1;
                }
            }

        }
    return -1;

    }
};
