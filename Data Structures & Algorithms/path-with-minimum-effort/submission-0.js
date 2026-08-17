class Solution {
    /**
     * @param {number[][]} heights
     * @return {number}
     */
    minimumEffortPath(heights) {
        let pq = new PriorityQueue((a, b) => a[0] - b[0]);
        let n = heights.length;
        let m = heights[0].length;
        let dist = Array.from({ length: n }, () => new Array(m).fill(Infinity));

        dist[0][0] = 0;

        pq.push([0, 0, 0]);

        while (pq.size()) {
            let [diff, r, c] = pq.pop();
            if (r === n - 1 && c === m - 1) return diff;

            for (let delRow = -1; delRow <= 1; delRow++) {
                for (let delCol = -1; delCol <= 1; delCol++) {
                    if (Math.abs(delRow + delCol) !== 1) continue; //skipping diagonals

                    let nrow = delRow + r;
                    let ncol = delCol + c;
                    if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m) {
                        let newEffort = Math.max(
                            Math.abs(heights[r][c] - heights[nrow][ncol]),
                            diff,
                        );
                        if (newEffort < dist[nrow][ncol]) {
                            dist[nrow][ncol] = newEffort;
                            pq.push([newEffort, nrow, ncol]);
                        }
                    }
                }
            }
        }
        return 0;
    }
}
