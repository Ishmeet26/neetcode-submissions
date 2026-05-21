class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let s = 1;
        let e = Math.max(...piles);

        let minRate = e;

        while (s <= e) {

            let mid = Math.floor(s + (e - s) / 2);

            let hours = 0;

            for (let p of piles) {
                hours += Math.ceil(p / mid);
            }

            if (hours <= h) {
                minRate = mid;
                e = mid - 1;
            } else {
                s = mid + 1;
            }
        }

        return minRate;
    }
}