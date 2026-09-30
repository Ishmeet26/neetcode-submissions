class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let record = [];
        let sum = 0;

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "+") {
                let last2Sum = record[record.length - 1] + record[record.length - 2];
                sum += last2Sum;
                record.push(last2Sum);
            } else if (operations[i] === "D") {
                let double = record[record.length - 1] * 2;
                sum += double;
                record.push(double);
            } else if (operations[i] === "C") {
                let previous = record.pop();
                sum -= previous;
            } else {
                record.push(Number(operations[i]));
                sum += Number(operations[i]);
            }
        }
        return sum;
    }
}
