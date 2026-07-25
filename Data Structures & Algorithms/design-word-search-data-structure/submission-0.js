class TrieNode {
    constructor() {
        this.links = new Array(26).fill(null);
        this.flag = false;
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
    setEnd() {
        this.flag = true;
    }
    isEnd() {
        return this.flag;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;

        for (let ch of word) {
            if (!node.containsKey(ch)) {
                node.put(ch, new TrieNode());
            }
            node = node.get(ch);
        }
        node.setEnd();
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        // need to use dfs on every root level to find word, if the word starts with "."
        function dfs(word, idx, root) {
            let node = root;
            //check if the char starts with '.'
            for (let i = idx; i < word.length; i++) {
                let ch = word[i];
                if (ch === ".") {
                    //dfs flow
                    for (let link of node.links) {
                        if (link !== null && dfs(word, i + 1, link)) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if (!node.containsKey(ch)) {
                        return false;
                    }
                    node = node.get(ch);
                }
            }
            return node.isEnd();
        }
        return dfs(word, 0, this.root);
    }
}
