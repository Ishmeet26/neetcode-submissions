class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        let queue = [];
        let front = 0;
        let stVal = image[sr][sc];
        if (stVal === color) {
            return image;
        }
        queue.push([sr, sc]);
        image[sr][sc] = color;
        let n = image.length;
        let m = image[0].length;
        while (front < queue.length) {
            let row = queue[front][0];
            let col = queue[front][1];
            front++;

            for (let delRow = -1; delRow <= 1; delRow++) {
                for (let delCol = -1; delCol <= 1; delCol++) {
                    let nRow = delRow + row;
                    let nCol = delCol + col;
                    if (Math.abs(delRow) + Math.abs(delCol) !== 1) {
                        continue;
                    }

                    if (
                        nRow >= 0 &&
                        nRow < n &&
                        nCol >= 0 &&
                        nCol < m &&
                        image[nRow][nCol] === stVal
                    ) {
                        image[nRow][nCol] = color;
                        queue.push([nRow, nCol]);
                    }
                }
            }
        }
        return image;
    }
}
