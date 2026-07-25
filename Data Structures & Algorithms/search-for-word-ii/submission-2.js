class Trie {
    constructor() {
        this.links = new Array(26).fill(null);
        this.flag = false;
    }
    setEnd() {
        this.flag = true;
    }
    isEnd() {
        return this.flag;
    }
    containsKey(ch) {
        return this.links[ch.charCodeAt() - "a".charCodeAt()] !== null;
    }
    put(ch, node) {
        this.links[ch.charCodeAt() - "a".charCodeAt()] = node;
    }
    get(ch) {
        return this.links[ch.charCodeAt() - "a".charCodeAt()];
    }
    addWord(word) {
        let node = this;
        for (let w of word) {
            if (!node.containsKey(w)) {
                node.put(w, new Trie());
            }
            node = node.get(w);
        }
        node.setEnd();
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let root = new Trie();
        for (let w of words) {
            root.addWord(w);
        }

        let ROWS = board.length;
        let COLS = board[0].length;
        let res = new Set();
        let visited = new Set();
        function dfs(r, c, node, currWordTillNow) {
            //basecase
            if (
                r < 0 ||
                c < 0 ||
                r >= ROWS ||
                c >= COLS ||
                visited.has(`${r},${c}`) ||
                !node.containsKey(board[r][c])
            ) {
                return;
            }

            //add this r,c to visited path
            visited.add(`${r},${c}`);
            //get node's ref node
            node = node.get(board[r][c]);
            //append char to word;
            currWordTillNow += board[r][c];
            //check if ref node is the ending ofd a word
            if (node.flag) res.add(currWordTillNow);

            dfs(r - 1, c, node, currWordTillNow);
            dfs(r + 1, c, node, currWordTillNow);
            dfs(r, c - 1, node, currWordTillNow);
            dfs(r, c + 1, node, currWordTillNow);

            visited.delete(`${r},${c}`);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, root, "");
            }
        }

        return [...res];
    }
}
