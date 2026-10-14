class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    bfs(n, m, grid, r, c) {
        let queue = [];
        let front = 0;
        queue.push([r, c]);
        grid[r][c] = "0";

        while (front < queue.length) {
            let [r, c] = queue[front++];
            for (let delRow = -1; delRow <= 1; delRow++) {
                for (let delCol = -1; delCol <= 1; delCol++) {
                    if (Math.abs(delRow + delCol) !== 1) {
                        continue;
                    }

                    let neighbourRow = r + delRow;
                    let neighbourCol = c + delCol;

                    if (
                        neighbourRow >= 0 &&
                        neighbourRow < n &&
                        neighbourCol >= 0 &&
                        neighbourCol < m &&
                        grid[neighbourRow][neighbourCol] === "1"
                    ) {
                        queue.push([neighbourRow, neighbourCol]);
                        grid[neighbourRow][neighbourCol] = "0";
                    }
                }
            }
        }
    }

    numIslands(grid) {
        let n = grid.length;
        let m = grid[0].length;
        let noOfIslands = 0;

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (grid[r][c] === "1") {
                    this.bfs(n, m, grid, r, c);
                    noOfIslands++;
                }
            }
        }

        return noOfIslands;
    }
}
