class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numEnclaves(grid) {
        let visited = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(0));
        let n = grid.length;
        let m = grid[0].length;
        let queue = [];
        let front = 0;

        for (let c = 0; c < m; c++) {
            if (!visited[0][c] && grid[0][c] === 1) {
                queue.push([0, c]);
                visited[0][c] = 1;
            }
            if (!visited[n - 1][c] && grid[n - 1][c] === 1) {
                queue.push([n - 1, c]);
                visited[n - 1][c] = 1;
            }
        }

        for (let r = 0; r < n; r++) {
            if (!visited[r][0] && grid[r][0] === 1) {
                queue.push([r, 0]);
                visited[r][0] = 1;
            }
            if (!visited[r][m - 1] && grid[r][m - 1] === 1) {
                queue.push([r, m - 1]);
                visited[r][m - 1] = 1;
            }
        }

        while (front < queue.length) {
            let levelSize = queue.length - front;

            for (let i = 0; i < levelSize; i++) {
                let [r, c] = queue[front++];
                for (let delRow = -1; delRow <= 1; delRow++) {
                    for (let delCol = -1; delCol <= 1; delCol++) {
                        if (Math.abs(delRow) + Math.abs(delCol) !== 1) {
                            continue;
                        }
                        let nRow = delRow + r;
                        let nCol = delCol + c;

                        if (
                            nRow >= 0 &&
                            nRow < n &&
                            nCol >= 0 &&
                            nCol < m &&
                            !visited[nRow][nCol] &&
                            grid[nRow][nCol] === 1
                        ) {
                            queue.push([nRow, nCol]);
                            visited[nRow][nCol] = 1;
                        }
                    }
                }
            }
        }
        let cnt = 0;
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (!visited[r][c] && grid[r][c] === 1) {
                    cnt++;
                }
            }
        }
        return cnt;
    }
}
