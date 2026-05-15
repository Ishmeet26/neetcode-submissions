class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let st = 0;
        let ed = s.length - 1;

        while (st <= ed) {
            while (st < ed && !this.alphaNum(s[st])) st++;
            while (ed > st && !this.alphaNum(s[ed])) ed--;
            if (s[st].toLowerCase() === s[ed].toLowerCase()) {
                st++;
                ed--;
            } else {
                return false;
            }
        }
        return true;
    }

    alphaNum(c) {
        return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9");
    }
}
