class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let queue = [];
        let visit = new Set();
        let front = 0;
        //added treasure cells for level 0 BFS
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                    visit.add(r + "," + c);
                }
            }
        }
        let dist = 0;

        function addCell(r, c) {
            if (
                r < 0 ||
                c < 0 ||
                r === ROWS ||
                c === COLS ||
                visit.has(r + "," + c) ||
                grid[r][c] === -1
            ) {
                return;
            }
            visit.add(r + "," + c);
            queue.push([r, c]);
        }

        while (front < queue.length) {
            //processing each level 0->1->2
            let levelSize = queue.length - front;
            for (let i = 0; i < levelSize; i++) {
                let [r, c] = queue[front++];
                grid[r][c] = dist;
                addCell(r + 1, c);
                addCell(r - 1, c);
                addCell(r, c + 1);
                addCell(r, c - 1);
            }
            dist++;
        }
    }
}
