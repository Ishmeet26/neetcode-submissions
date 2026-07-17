class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    isPalindrome(str, start, end) {
        while (start <= end) {
            if (str[start++] !== str[end--]) {
                return false;
            }
        }
        return true;
    }

    findPartition(idx, s, path, res) {
        if (idx === s.length) {
            res.push([...path]);
            return;
        }
        for (let i = idx; i < s.length; i++) {
            if (this.isPalindrome(s, idx, i)) {
                path.push(s.substring(idx, i + 1));
                this.findPartition(i + 1, s, path, res);
                path.pop();
            }
        }
    }
    partition(s) {
        let res = [];
        let path = [];
        this.findPartition(0, s, path, res);
        return res;
    }
}
