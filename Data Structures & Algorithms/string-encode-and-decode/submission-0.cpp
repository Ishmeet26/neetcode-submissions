class Solution {
public:

    string encode(vector<string>& strs) {
        string res;
        for(auto s: strs){
            res += to_string(s.length()) + "#" + s;
        }
        return res;
    }

    vector<string> decode(string s) {
        vector<string>res;
        int i = 0;

        while(i < s.length()){
            int j  = i;
            while(s[j] != '#'){
                j++;
            }

            int length = stoi(s.substr(i, j-i));

            i = j+1;
            j = i+length;
            res.push_back(s.substr(i, length));
            i = j;
        }
        return res;
    }
};
