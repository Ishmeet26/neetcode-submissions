class Solution {
public:
    int characterReplacement(string s, int k) {

        unordered_map<char , int>count;
        int l = 0;
        int maxf = 0;
        int res = 0;
        for(int r= 0 ; r < s.length() ; r++){

            count[s[r]]++;
            maxf = max(count[s[r]] , maxf);
            while((r-l+1) - maxf > k) {
                count[s[l]]--;
                l++;
            }

            res= max(maxf , r-l+1);
        }
        return res;
    }
};
