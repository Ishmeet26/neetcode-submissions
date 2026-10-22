class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let adj = Array.from({ length: n }, () => []);
        for (let [u, v, wt] of flights) {
            adj[u].push([v, wt]);
        }

        let dist = new Array(n).fill(Infinity);
        dist[src] = 0;

        let queue = [],
            front = 0;
        //stops, node, cost;
        queue.push([0, src, 0]);

        while (front < queue.length) {
            let [stops, node, cost] = queue[front++];
            if (stops > k) continue;

            for (let [adjNode, ewt] of adj[node]) {
                if (cost + ewt < dist[adjNode] && stops <= k) {
                    dist[adjNode] = cost + ewt;
                    queue.push([stops + 1, adjNode, cost + ewt]);
                }
            }
        }

        if (dist[dst] === Infinity) return -1;
        return dist[dst];
    }
}
