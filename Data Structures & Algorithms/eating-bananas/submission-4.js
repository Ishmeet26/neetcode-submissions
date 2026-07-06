class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    calcEatingHours(piles, speed) {
        let hours = 0;
        for (let p of piles) {
            hours += Math.ceil(p / speed);
        }
        return hours;
    }
    minEatingSpeed(piles, h) {
        let s = 1;
        let e = Math.max(...piles);

        while (s <= e) {
            let speed = Math.floor(s + (e - s) / 2);
            let eatingHour = this.calcEatingHours(piles, speed);
            if (eatingHour > h) {
                s = speed + 1;
            } else {
                e = speed - 1;
            }
        }
        return s;
    }
}
