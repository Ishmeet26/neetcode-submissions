class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adj = Array.from({ length: numCourses }, () => []);

        for (let [u, v] of prerequisites) {
            adj[v].push(u);
        }

        let indegree = new Array(numCourses).fill(0);
        for (let i = 0; i < numCourses; i++) {
            for (let node of adj[i]) {
                indegree[node]++;
            }
        }

        let queue = [];
        let front = 0;

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }
        let topo = [];
        while (front < queue.length) {
            let node = queue[front++];
            topo.push(node);

            for (let adNode of adj[node]) {
                indegree[adNode]--;
                if (indegree[adNode] === 0) {
                    queue.push(adNode);
                }
            }
        }

        return topo.length === numCourses ? true : false;
    }
}
