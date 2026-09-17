class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let adjList = Array.from({ length: n + 1 }, () => []);
        for (let [u, v, w] of times) {
            adjList[u].push([v, w]);
        }

        let dist = new Array(n + 1).fill(Infinity);
        dist[k] = 0;
        let pq = new PriorityQueue((a, b) => a[0][b[0]]);

        //[node, time]
        pq.push([k, 0]);

        while (pq.size() > 0) {
            let [node, time] = pq.pop();

            for (let [adjNode, adjTime] of adjList[node]) {
                let newTime = time + adjTime;

                if (newTime < dist[adjNode]) {
                    dist[adjNode] = newTime;
                    pq.push([adjNode, newTime]);
                }
            }
        }

        // If any node is unreachable
        for (let i = 1; i <= n; i++) {
            if (dist[i] === Infinity) {
                return -1;
            }
        }

        // Last node to receive signal
        return Math.max(...dist.slice(1));
    }
}
