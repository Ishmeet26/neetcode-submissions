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
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    isValid(adjRow, adjCol, n) {
        return adjRow >= 0 && adjRow < n && adjCol >= 0 && adjCol < n;
    }
    largestIsland(grid) {
        let n = grid.length;
        let ds = new DisjointSet(n * n);
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                if (grid[row][col] == 0) continue;
                for (let delRow = -1; delRow <= 1; delRow++) {
                    for (let delCol = -1; delCol <= 1; delCol++) {
                        if (Math.abs(delRow + delCol) !== 1) continue;
                        let adjRow = delRow + row;
                        let adjCol = delCol + col;
                        if (this.isValid(adjRow, adjCol, n) && grid[adjRow][adjCol] == 1) {
                            let nodeNo = row * n + col;
                            let adjNodeNo = adjRow * n + adjCol;
                            ds.unionBySize(nodeNo, adjNodeNo);
                        }
                    }
                }
            }
        }
        let max = 0;
        //step 2 try converting 0 to 1;
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                if (grid[row][col] == 1) continue;
                let components = new Set();
                for (let delRow = -1; delRow <= 1; delRow++) {
                    for (let delCol = -1; delCol <= 1; delCol++) {
                        if (Math.abs(delRow + delCol) !== 1) continue;
                        let adjRow = delRow + row;
                        let adjCol = delCol + col;
                        if (this.isValid(adjRow, adjCol, n) && grid[adjRow][adjCol] == 1) {
                            components.add(ds.findParent(adjRow * n + adjCol));
                        }
                    }
                }
                let totalSize = 0;
                for (let val of components) {
                    totalSize += ds.size[val];
                }
                max = Math.max(max, totalSize + 1); // +1 is for the cell which we converted to 1 from 0;
            }
        }
        // if all grids are already 1 then we need to find the ultimate parent from there. since all are already ones, then our step 2 wont work;
        for (let cellNo = 0; cellNo < n * n; cellNo++) {
            max = Math.max(max, ds.size[ds.findParent(cellNo)]);
        }
        return max;
    }
}
