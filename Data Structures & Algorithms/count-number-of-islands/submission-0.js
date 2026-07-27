class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    bfs(r, c, grid, n, m) {
        let queue = [];
        let front = 0;
        queue.push([r, c]);
        grid[r][c] = "0";

        while (front < queue.length) {
            let row = queue[front][0];
            let col = queue[front][1];
            front++;
            for (let delRow = -1; delRow <= 1; delRow++) {
                for (let delCol = -1; delCol <= 1; delCol++) {
                    let neighbourRow = row + delRow;
                    let neighbourCol = col + delCol;
                    // Skip diagonals and the current cell
                    if (Math.abs(delRow) + Math.abs(delCol) !== 1) {
                        continue;
                    }

                    if (
                        neighbourRow >= 0 &&
                        neighbourRow < n &&
                        neighbourCol >= 0 &&
                        neighbourCol < m &&
                        grid[neighbourRow][neighbourCol] === "1"
                    ) {
                        grid[neighbourRow][neighbourCol] = "0";
                        queue.push([neighbourRow, neighbourCol]);
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
                    this.bfs(r, c, grid, n, m);
                    noOfIslands++;
                }
            }
        }
        return noOfIslands;
    }
}
