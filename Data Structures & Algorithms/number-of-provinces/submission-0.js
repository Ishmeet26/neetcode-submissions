class Solution {
    /**
     * @param {number[][]} isConnected
     * @return {number}
     */
    dfs(node, adjList, visited) {
        visited[node] = 1;
        for (let neighbours of adjList[node]) {
            if (visited[neighbours] === 0) {
                this.dfs(neighbours, adjList, visited);
            }
        }
    }
    findCircleNum(isConnected) {
        let adjList = new Array(isConnected.length).fill(0).map(() => []);
        // creating adj list using graph matrix
        for (let i = 0; i < isConnected.length; i++) {
            for (let j = 0; j < isConnected.length; j++) {
                if (isConnected[i][j] === 1 && i !== j) {
                    adjList[i].push(j);
                    adjList[j].push(i);
                }
            }
        }
        let visited = new Array(isConnected.length).fill(0);
        let cnt = 0;
        for (let i = 0; i < visited.length; i++) {
            if (visited[i] == 0) {
                cnt++;
                this.dfs(i, adjList, visited);
            }
        }
        return cnt;
    }
}
