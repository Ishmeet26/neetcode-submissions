class Node {
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

class PrefixTree {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.containsKey(ch)) {
                node.put(ch, new Node());
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
        let node = this.root;
        for (let ch of word) {
            if (!node.containsKey(ch)) {
                return false;
            }
            node = node.get(ch);
        }
        return node.isEnd();
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for (let ch of prefix) {
            if (!node.containsKey(ch)) {
                return false;
            }
            node = node.get(ch);
        }
        return true;
    }
}
