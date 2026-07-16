class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solve(col, board, ans, leftRow, upperDiagonal, lowerDiagonal, n) {
        if (col === n) {
            ans.push(board.map((row) => row.join("")));
            return;
        }

        for (let row = 0; row < n; row++) {
            if (
                leftRow[row] === 0 &&
                upperDiagonal[n - 1 + col - row] === 0 &&
                lowerDiagonal[row + col] === 0
            ) {
                leftRow[row] = 1;
                upperDiagonal[n - 1 + col - row] = 1;
                lowerDiagonal[row + col] = 1;
                board[row][col] = "Q";

                this.solve(col + 1, board, ans, leftRow, upperDiagonal, lowerDiagonal, n);
                leftRow[row] = 0;
                upperDiagonal[n - 1 + col - row] = 0;
                lowerDiagonal[row + col] = 0;
                board[row][col] = ".";
            }
        }
    }

    solveNQueens(n) {
        let board = new Array(n).fill(null).map(() => new Array(n).fill("."));
        let ans = [];

        let leftRow = new Array(n).fill(0);
        let upperDiagonal = new Array(2 * n - 1).fill(0);
        let lowerDiagonal = new Array(2 * n - 1).fill(0);

        this.solve(0, board, ans, leftRow, upperDiagonal, lowerDiagonal, n);
        return ans;
    }
}
