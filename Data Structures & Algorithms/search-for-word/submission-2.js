class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let ROWS = board.length;
        let COLS = board[0].length;
        let path = new Set();

        function dfs(r, c, currWordLen) {
            if (currWordLen === word.length) {
                return true;
            }
            if (
                r < 0 ||
                c < 0 ||
                r >= ROWS ||
                c >= COLS ||
                word[currWordLen] != board[r][c] ||
                path.has(`${r},${c}`)
            ) {
                return false;
            }
            path.add(`${r},${c}`);
            let res =
                dfs(r + 1, c, currWordLen + 1) ||
                dfs(r - 1, c, currWordLen + 1) ||
                dfs(r, c + 1, currWordLen + 1) ||
                dfs(r, c - 1, currWordLen + 1);

            path.delete(`${r},${c}`);
            return res;
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (dfs(r, c, 0)) return true;
            }
        }
        return false;
    }
}
