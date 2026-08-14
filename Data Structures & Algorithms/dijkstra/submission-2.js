/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        let adj = Array.from({ length: n }, () => []);
        for (let [u, v, wt] of edges) {
            adj[u].push([v, wt]);
        }

        let dist = new Array(n).fill(Infinity);
        dist[src] = 0;
        let pq = new PriorityQueue((a, b) => a - b);
        pq.push([0, src]);

        while (pq.size()) {
            let [currDist, node] = pq.pop();

            for (let [adjNode, wt] of adj[node]) {
                if (currDist + wt < dist[adjNode]) {
                    dist[adjNode] = currDist + wt;
                    pq.push([dist[adjNode], adjNode]);
                }
            }
        }
        return dist.map((d) => (d === Infinity ? -1 : d));
    }
}
