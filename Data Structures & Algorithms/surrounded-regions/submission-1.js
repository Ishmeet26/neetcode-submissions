class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let visited = Array.from({ length: board.length }, () =>
            new Array(board[0].length).fill(0),
        );

        let n = board.length;
        let m = board[0].length;

        function dfs(r, c, visited) {
            visited[r][c] = 1;
            for (let delRow = -1; delRow <= 1; delRow++) {
                for (let delCol = -1; delCol <= 1; delCol++) {
                    if (Math.abs(delRow) + Math.abs(delCol) !== 1) {
                        continue;
                    }

                    let nRow = delRow + r;
                    let nCol = delCol + c;

                    if (
                        nRow < 0 ||
                        nRow === n ||
                        nCol < 0 ||
                        nCol === m ||
                        visited[nRow][nCol] ||
                        board[nRow][nCol] === "X"
                    ) {
                        continue;
                    }

                    dfs(nRow, nCol, visited);
                }
            }
        }

        for (let c = 0; c < m; c++) {
            //traverse row 1;
            if (!visited[0][c] && board[0][c] === "O") {
                dfs(0, c, visited);
            }

            // traverse last row
            if (!visited[n - 1][c] && board[n - 1][c] === "O") {
                dfs(n - 1, c, visited);
            }
        }

        for (let r = 0; r < n; r++) {
            //traverse col 1;
            if (!visited[r][0] && board[r][0] === "O") {
                dfs(r, 0, visited);
            }

            // traverse last row
            if (!visited[r][m - 1] && board[r][m - 1] === "O") {
                dfs(r, m - 1, visited);
            }
        }

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (board[r][c] === "O" && !visited[r][c]) {
                    board[r][c] = "X";
                }
            }
        }

        return board;
    }
}
