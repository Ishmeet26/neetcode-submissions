// USING ONLY MATRIX
// class Solution {
//     dfs(node, isConnected, visited) {
//         visited[node] = 1;

//         for (let neighbor = 0; neighbor < isConnected.length; neighbor++) {
//             if (isConnected[node][neighbor] === 1 && visited[neighbor] === 0) {
//                 this.dfs(neighbor, isConnected, visited);
//             }
//         }
//     }

//     findCircleNum(isConnected) {
//         const n = isConnected.length;
//         const visited = new Array(n).fill(0);

//         let provinces = 0;

//         for (let i = 0; i < n; i++) {
//             if (visited[i] === 0) {
//                 provinces++;
//                 this.dfs(i, isConnected, visited);
//             }
//         }

//         return provinces;
//     }
// }

// USING ADJ LIST FROM MATRIX
// class Solution {
//     /**
//      * @param {number[][]} isConnected
//      * @return {number}
//      */
//     dfs(node, adjList, visited) {
//         visited[node] = 1;
//         for (let neighbours of adjList[node]) {
//             if (visited[neighbours] === 0) {
//                 this.dfs(neighbours, adjList, visited);
//             }
//         }
//     }
//     findCircleNum(isConnected) {
//         let adjList = new Array(isConnected.length).fill(0).map(() => []);
//         // creating adj list using graph matrix
//         for (let i = 0; i < isConnected.length; i++) {
//             for (let j = 0; j < isConnected.length; j++) {
//                 if (isConnected[i][j] === 1 && i !== j) {
//                     adjList[i].push(j);
//                     adjList[j].push(i);
//                 }
//             }
//         }
//         let visited = new Array(isConnected.length).fill(0);
//         let cnt = 0;
//         for (let i = 0; i < visited.length; i++) {
//             if (visited[i] == 0) {
//                 cnt++;
//                 this.dfs(i, adjList, visited);
//             }
//         }
//         return cnt;
//     }
// }

//USING DSU
class DisjointSet {
    constructor(n) {
        this.parent = new Array(n + 1).fill(0);
        this.size = new Array(n + 1).fill(1);
        this.rankValue = new Array(n + 1).fill(0);

        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }

    findParent(node) {
        if (this.parent[node] === node) {
            return node;
        }

        this.parent[node] = this.findParent(this.parent[node]);

        return this.parent[node];
    }

    unionByRank(u, v) {
        let ult_u = this.findParent(u);
        let ult_v = this.findParent(v);
        if (ult_u === ult_v) return;

        if (this.rankValue[ult_u] < this.rankValue[ult_v]) {
            [ult_u, ult_v] = [ult_v, ult_u];
        }

        this.parent[ult_v] = ult_u;

        if (this.rankValue[ult_u] === this.rankValue[ult_v]) {
            this.rankValue[ult_u]++;
        }
    }

    // Merges two sets using component-size balancing.
    unionBySize(u, v) {
        let ult_u = this.findParent(u);
        let ult_v = this.findParent(v);

        // Same representative means both nodes are already connected.
        if (ult_u === ult_v) {
            return;
        }

        // Keep the larger component as the main parent.
        if (this.size[ult_u] < this.size[ult_v]) {
            [ult_u, ult_v] = [ult_v, ult_u];
        }

        // Attach the smaller component to the larger component.
        this.parent[ult_v] = ult_u;

        // Update the size of the merged component.
        this.size[ult_u] += this.size[ult_v];
    }

    // Checks whether two nodes share one set.
    find(u, v) {
        return this.findParent(u) === this.findParent(v);
    }

    // Returns the number of nodes in one set.
    componentSizeOf(node) {
        return this.size[this.findParent(node)];
    }
}

class Solution {
    findCircleNum(isConnected) {
        let V = isConnected.length;
        let provinces = 0;
        let ds = new DisjointSet(V);
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (isConnected[i][j] == 1) {
                    ds.unionBySize(i, j);
                }
            }
        }
        //we need to find number of ultimate parents,
        //since every component has its parent,
        //so num of ulti parents === no of components
        for (let i = 0; i < V; i++) {
            if (ds.findParent(i) === i) {
                provinces++;
            }
        }
        return provinces;
    }
}
