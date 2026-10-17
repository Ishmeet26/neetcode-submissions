class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let n = points.length;

        let adj = Array.from({ length: n }, () => []);

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let [x1, y1] = points[i];
                let [x2, y2] = points[j];

                let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);

                adj[i].push([dist, j]);
                adj[j].push([dist, i]);
            }
        }
        let minCost = 0;
        let visited = new Array(n).fill(0);
        let pq = new PriorityQueue((a, b) => a[0] - b[0]);
        //weight , node
        pq.push([0, 0]);

        while (pq.size() > 0) {
            let [wt, node] = pq.pop();
            if (visited[node] === 1) continue;

            minCost += wt;
            visited[node] = 1;

            for (let [adjWt, adjNode] of adj[node]) {
                if (!visited[adjNode]) {
                    pq.push([adjWt, adjNode]);
                }
            }
        }
        return minCost;
    }
}
