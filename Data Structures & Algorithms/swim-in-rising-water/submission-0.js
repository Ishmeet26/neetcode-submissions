class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        let n = grid.length;
        let visited = Array.from({ length: n }, () => new Array(n).fill(0));
        let pq = new PriorityQueue((a, b) => a[0] - b[0]);
        pq.push([grid[0][0], 0, 0]);
        visited[0][0] = 1;
        while (pq.size() > 0) {
            let [t, r, c] = pq.pop();
            if (r === n - 1 && c === n - 1) return t;

            for (let delRow = -1; delRow <= 1; delRow++) {
                for (let delCol = -1; delCol <= 1; delCol++) {
                    if (Math.abs(delRow + delCol) !== 1) continue;
                    let adjRow = delRow + r;
                    let adjCol = delCol + c;

                    if (
                        adjRow >= 0 &&
                        adjRow < n &&
                        adjCol >= 0 &&
                        adjCol < n &&
                        visited[adjRow][adjCol] !== 1
                    ) {
                        visited[adjRow][adjCol] = 1;
                        pq.push([Math.max(grid[adjRow][adjCol], t), adjRow, adjCol]);
                    }
                }
            }
        }
    }
}
