class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let keyMap = new Map();
        let res = [];
        for (let str of strs) {
            let key = str.split("").sort().join("");
            let keyVals = keyMap.get(key) || [];
            keyVals.push(str);
            keyMap.set(key, keyVals);
        }

        keyMap.forEach((val, key) => {
            res.push(val);
        });
        console.log(res)
        return res;
    }
}
