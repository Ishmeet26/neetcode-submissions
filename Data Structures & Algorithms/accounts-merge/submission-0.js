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
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        let n = accounts.length;
        const ds = new DisjointSet(n);
        let mapMailToNode = new Map();

        for (let i = 0; i < n; i++) {
            for (let j = 1; j < accounts[i].length; j++) {
                let mail = accounts[i][j];
                if (!mapMailToNode.has(mail)) {
                    mapMailToNode.set(mail, i);
                } else {
                    ds.unionBySize(i, mapMailToNode.get(mail));
                }
            }
        }
        let mergedAccounts = Array.from({ length: n }, () => []);
        for (let [key, val] of mapMailToNode) {
            let mail = key;
            let node = ds.findParent(val);

            mergedAccounts[node].push(mail);
        }
        
        let ans = [];
        for (let i = 0; i < n; i++) {
            if (mergedAccounts[i].length === 0) continue;
            let temp = [];
            mergedAccounts[i].sort((a, b) => a - b);
            temp.push(accounts[i][0]);
            for (let val of mergedAccounts[i]) {
                temp.push(val);
            }
            ans.push(temp);
        }
       
        return ans;
    }
}
