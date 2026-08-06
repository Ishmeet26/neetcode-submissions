class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    dfs(node, adj, visited) {
        visited[node] = 1;
        for (let adjNode of adj[node]) {
            if (!visited[adjNode]) {
                this.dfs(adjNode, adj, visited);
            }
        }
    }
    countComponents(n, edges) {
        let visited = new Array(n).fill(0);
        let adj = Array.from({ length: n }, () => []);
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                this.dfs(i, adj, visited);
                cnt++;
            }
        }
        return cnt;
    }
}
