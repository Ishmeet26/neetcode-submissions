class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    dfs(grid, r, c, n, m) {
        grid[r][c] = 0;
        let area = 1;
        for (let delRow = -1; delRow <= 1; delRow++) {
            for (let delCol = -1; delCol <= 1; delCol++) {
                let nRow = r + delRow;
                let nCol = c + delCol;

                if (Math.abs(delRow) + Math.abs(delCol) !== 1) {
                    continue;
                }

                if (nRow >= 0 && nRow < n && nCol >= 0 && nCol < m && grid[nRow][nCol] === 1) {
                    grid[nRow][nCol] = 0;
                    area += this.dfs(grid, nRow, nCol, n, m);
                }
            }
        }
        return area;
    }
    maxAreaOfIsland(grid) {
        let n = grid.length;
        let m = grid[0].length;
        let maxIslandArea = 0;
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (grid[r][c] === 1) {
                    let area = this.dfs(grid, r, c, n, m);
                    maxIslandArea = Math.max(maxIslandArea, area);
                }
            }
        }
        return maxIslandArea;
    }
}
