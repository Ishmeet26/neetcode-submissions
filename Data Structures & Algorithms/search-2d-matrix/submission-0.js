class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let top = 0;
        let bottom = rows - 1;

        while (top <= bottom) {
            let row = Math.floor(top + (bottom - top) / 2);
            if (target < matrix[row][0]) {
                bottom = row - 1;
            } else if (target > matrix[row][cols - 1]) {
                top = row + 1;
            } else {
                break;
            }
        }

        if (!(top <= bottom)) {
            return false;
        }

        let row = Math.floor(top + (bottom - top) / 2);
        let s = 0;
        let e = cols - 1;

        while (s <= e) {
            let mid = Math.floor(s + (e - s) / 2);

            if (target < matrix[row][mid]) {
                e = mid - 1;
            } else if (target > matrix[row][mid]) {
                s = mid + 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
