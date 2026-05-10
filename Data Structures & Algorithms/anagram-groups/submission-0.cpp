class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        
        unordered_map<string , vector<string>> res;

        for(auto s: strs){
            vector<int>count(26, 0);

            for(char c: s){
                count[c -'a']++;
            }

            string key= to_string(count[0]); //to not get leading , comma in below line
            for(int i = 1; i<26; i++){
                key += ',' + to_string(count[i]);
            }
            res[key].push_back(s);
        }

        vector<vector<string>> result;
        for(auto pair : res){
            result.push_back(pair.second);
        }
        return result;

    }
};
