class Solution {
private:
    char lowerCaseChar(char c){
        if( c>= 'A' && c<='Z'){
            return c - 'A' + 'a';
        }

        if( c>= 'a' && c<='z'){
            return c;
        }
    }




    bool isAlphaNumeric(char ch){
        return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') ||
         (ch >= '0' && ch <= '9');
    }
public:
    bool isPalindrome(string s) {
        
        int start = 0;
        int end = s.length() - 1;

        while(start<end){
            
            while( start < end && !isAlphaNumeric(s[start])){
                start++;
            }
             while(start < end && !isAlphaNumeric(s[end])){
                end--;
            }

            if(lowerCaseChar(s[start]) != lowerCaseChar(s[end])){
                return false;
            }else{
                start++;
                end--;
            }

        } 
        return true;
    }
};
