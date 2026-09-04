class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let visit = new Set(deadends);
        if (visit.has("0000")) return -1;

        let queue = [];
        let front = 0;
        queue.push(["0000", 0]);
        visit.add("0000");
        function children(lock) {
            let res = [];
            for (let i = 0; i < 4; i++) {
                let up =
                    lock.slice(0, i) + String((parseInt(lock[i]) + 1) % 10) + lock.slice(i + 1);
                let down =
                    lock.slice(0, i) +
                    String((parseInt(lock[i]) - 1 + 10) % 10) +
                    lock.slice(i + 1);
                res.push(up);
                res.push(down);
            }
            return res;
        }
        while (front < queue.length) {
            let [lock, turns] = queue[front++];
            if (lock === target) return turns;

            for (let child of children(lock)) {
                if (!visit.has(child)) {
                    queue.push([child, turns + 1]);
                    visit.add(child);
                }
            }
        }
        return -1;
    }
}
