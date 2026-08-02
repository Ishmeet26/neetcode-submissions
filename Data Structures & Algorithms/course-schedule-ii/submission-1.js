class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let adj = Array.from({ length: numCourses }, () => []);
        // create adj list
        for (let [u, v] of prerequisites) {
            adj[v].push(u);
        }
        // create indgree and push inderee values for every adjNode's node
        let indegree = new Array(numCourses).fill(0);
        for (let i = 0; i < numCourses; i++) {
            for (let node of adj[i]) {
                indegree[node]++;
            }
        }

        let queue = [];
        let front = 0;
        // now push all nodes which have indegree 0 to start topo sort
        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }
        let topo = [];
        while (front < queue.length) {
            let node = queue[front++];
            //since node's indegree is already 0, push in the list
            topo.push(node);
            //now mark this nodes adj nodes indegree-- as wee are removing edges
            for (let adNode of adj[node]) {
                indegree[adNode]--;
                if (indegree[adNode] === 0) {
                    queue.push(adNode);
                }
            }
        }

        return topo.length === numCourses ? topo : [];
    }
}
