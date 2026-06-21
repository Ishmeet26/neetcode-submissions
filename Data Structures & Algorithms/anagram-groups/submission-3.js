class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let keyMap = new Map();

        for (let str of strs) {
            let key = str.split("").sort().join("");
            let keyVals = keyMap.get(key) || [];
            keyVals.push(str);
            keyMap.set(key, keyVals);
        }
        return [...keyMap.values()];
    }
}
