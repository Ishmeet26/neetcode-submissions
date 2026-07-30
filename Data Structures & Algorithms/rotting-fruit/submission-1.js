class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let visited = new Set();
        let n = grid.length;
        let m = grid[0].length;
        let queue = [];
        let front = 0;
        let fresh = 0;
        //pushing all starting points for rotten oranges;
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (grid[r][c] === 1) fresh++;
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                    visited.add(r + "," + c);
                }
            }
        }
        // After counting fresh oranges and adding rotten ones to the queue
        if (fresh === 0) return 0;
        function addCell(r, c) {
            if (
                r < 0 ||
                c < 0 ||
                r >= n ||
                c >= m ||
                grid[r][c] !== 1 ||
                visited.has(r + "," + c)
            ) {
                return false;
            }

            queue.push([r, c]);
            visited.add(r + "," + c);
            fresh--;
            return true;
        }

        let time = 0;
        while (front < queue.length) {
            let levelSize = queue.length - front;
            let rotted = false;

            for (let i = 0; i < levelSize; i++) {
                let [r, c] = queue[front++];

                // Down
                if (addCell(r + 1, c)) rotted = true;

                // Up
                if (addCell(r - 1, c)) rotted = true;

                // Right
                if (addCell(r, c + 1)) rotted = true;

                // Left
                if (addCell(r, c - 1)) rotted = true;
            }

            if (rotted) time++;
        }

        if (fresh > 0) return -1;
        return time;
    }
}
