class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        let queue = [];
        let front = 0;
        let n = grid.length;
        let m = grid[0].length;
        // Start or destination is blocked
        if (grid[0][0] === 1 || grid[n - 1][m - 1] === 1) {
            return -1;
        }
        let dist = Array.from({ length: n }, () => new Array(m).fill(Infinity));
        console.log(dist);
        let dest = [n - 1, m - 1];
        dist[0][0] = 1;
        queue.push([1, 0, 0]);

        while (front < queue.length) {
            let [dis, r, c] = queue[front++];
            // Destination reached
            if (r === dest[0] && c === dest[1]) {
                return dis;
            }
            for (let delRow = -1; delRow <= 1; delRow++) {
                for (let delCol = -1; delCol <= 1; delCol++) {
                    if (delRow === 0 && delCol === 0) {
                        continue;
                    }
                    let nRow = delRow + r;
                    let nCol = delCol + c;

                    if (
                        nRow >= 0 &&
                        nRow < n &&
                        nCol >= 0 &&
                        nCol < m &&
                        grid[nRow][nCol] === 0 &&
                        dis + 1 < dist[nRow][nCol]
                    ) {
                        dist[nRow][nCol] = 1 + dis;

                        queue.push([1 + dis, nRow, nCol]);
                    }
                }
            }
        }

        return -1;
    }
}
