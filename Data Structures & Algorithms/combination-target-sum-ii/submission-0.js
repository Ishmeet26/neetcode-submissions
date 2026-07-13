class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */

    findCombinations(idx, arr, t, res, ds  ){
        if(t === 0){
            res.push([...ds]);
            return;
        }

        for(let i = idx; i<arr.length; i++){
            if(i>idx && arr[i] === arr[i-1]) continue;
            if(arr[i] > t) break;

            ds.push(arr[i]);
            this.findCombinations(i+1, arr, t - arr[i], res,ds )
            ds.pop();
        }
    }
    combinationSum2(candidates, target) {
        candidates.sort((a,b)=> a-b);
        let res= [];
        let ds = [];
        this.findCombinations(0, candidates, target, res, ds);
        return res;
    }
}
