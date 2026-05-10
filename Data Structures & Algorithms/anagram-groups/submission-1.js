class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for(let s of strs){
            let sortString = s.split("").sort().join("");
            if(!map[sortString]){
                map[sortString]=[];
            }
            map[sortString].push(s);
        }
    return Object.values(map);
    }
}
