class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let s = 1;
        let e = Math.max(...piles);
        let minSpeed = Infinity;
        while (s <= e) {
            let mid = Math.floor(s + (e - s) / 2);

            let hour = 0;

            for (let p of piles) {
                hour += Math.ceil(p / mid);
            }

            if (hour > h) {
                s = mid + 1;
            } else {
                e = mid - 1;
                minSpeed = Math.min(minSpeed, mid);
            }
        }
        return minSpeed;
    }
}
