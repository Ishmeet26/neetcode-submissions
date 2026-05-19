class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let record = [];
        let sum = 0;
        for (let c of operations) {
            if (c === "D" && record.length > 0) {
                let score = record[record.length - 1] * 2;
                record.push(score);
                sum += score;
            } else if (c === "C" && record.length > 0) {
                sum = sum - record[record.length - 1];
                record.pop();
            } else if (c === "+" && record.length > 1) {
                let score = record[record.length - 1] + record[record.length - 2];
                record.push(score);
                sum = sum + score;
            } else {
                record.push(Number(c));
                sum = sum + Number(c);
            }
        }
        return sum;
    }
}
