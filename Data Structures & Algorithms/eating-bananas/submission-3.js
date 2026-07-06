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
        console.log("hours", hours);
        return hours;
    }
    minEatingSpeed(piles, h) {
        let s = 1;
        let e = Math.max(...piles);
        let res = Infinity;
        while (s <= e) {
            let speed = Math.floor(s + (e - s) / 2);
            console.log("s, e, speed : ", s, e, speed);
            let eatingHour = this.calcEatingHours(piles, speed);

            if (eatingHour > h) {
                s = speed + 1;
            } else {
                res = Math.min(res, speed);
                e = speed - 1;
            }
        }
        return res;
    }
}
