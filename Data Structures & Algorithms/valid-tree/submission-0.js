class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n === 0) return true;
        if (edges.length > n - 1) {
            return false;
        }
        let adj = Array.from({ length: n }, () => []);
        let visit = new Set();
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        function dfs(node, parent) {
            if (visit.has(node)) {
                return false;
            }

            visit.add(node);
            for (let adjNode of adj[node]) {
                if (adjNode === parent) continue;
                if (!dfs(adjNode, node)) return false;
            }
            return true;
        }

        return dfs(0, -1) && n === visit.size;
    }
}
