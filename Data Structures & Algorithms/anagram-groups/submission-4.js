class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let keyMap = new Map();

        for (let str of strs) {
            let key = str.split("").sort().join("");
            if (!keyMap.has(key)) {
                keyMap.set(key, []);
            }

            keyMap.get(key).push(str);
        }
        return [...keyMap.values()];
    }
}
