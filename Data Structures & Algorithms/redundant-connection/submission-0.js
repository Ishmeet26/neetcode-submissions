class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        let adj = Array.from({ length: n + 1 }, () => []);
        let visited = new Array(n + 1).fill(false);
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        let cycle = new Set();
        let cycleStart = -1;

        function dfs(node, parent) {
            visited[node] = true;
            for (let adjNode of adj[node]) {
                if (!visited[adjNode]) {
                    if (dfs(adjNode, node)) {
                        if (cycleStart !== -1) {
                            cycle.add(node);
                        }

                        if (node === cycleStart) {
                            cycleStart = -1;
                        }
                        return true;
                    }
                } else if (adjNode !== parent) {
                    cycleStart = adjNode;
                    cycle.add(node);
                    return true;
                }
            }
            return false;
        }

        dfs(1, -1);

        for (let i = edges.length -1; i >= 0; i--) {
            const [u, v] = edges[i];
            if (cycle.has(u) && cycle.has(v)) {
                return [u, v];
            }
        }
        return [];
    }
}
