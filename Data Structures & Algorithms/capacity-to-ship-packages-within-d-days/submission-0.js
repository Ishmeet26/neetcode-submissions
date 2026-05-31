class Solution {
    calcDays(weights, capacity) {
        let days = 1;
        let sum = 0;

        for (let w of weights) {
            if (sum + w <= capacity) {
                sum += w;
            } else {
                days++;
                sum = w;
            }
        }

        return days;
    }

    shipWithinDays(weights, days) {
        let s = Math.max(...weights);
        let e = weights.reduce((a, b) => a + b, 0);

        while (s < e) {
            let mid = Math.floor((s + e) / 2);

            let d = this.calcDays(weights, mid);

            if (d <= days) {
                e = mid;
            } else {
                s = mid + 1;
            }
        }

        return s;
    }
}