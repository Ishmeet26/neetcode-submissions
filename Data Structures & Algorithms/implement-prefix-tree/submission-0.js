// Node Structure for Trie
class Node {
    constructor() {
        /* Array to store links to child nodes,
        each index represents a letter */
        this.links = new Array(26).fill(null);

        /* Flag indicating if 
        the node marks the end 
        of a word */
        this.flag = false;
    }

    /* Check if the node contains
    a specific key (letter) */
    containsKey(ch) {
        return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
    }

    /* Insert a new node with a specific
    key (letter) into the Trie */
    put(ch, node) {
        this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
    }

    /* Get the node with a specific
    key (letter) from the Trie */
    get(ch) {
        return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
    }

    /* Set the current node
    as the end of a word */
    setEnd() {
        this.flag = true;
    }

    /* Check if the 
    current node marks 
    the end of a word */
    isEnd() {
        return this.flag;
    }
}
class PrefixTree {
     /* Constructor to 
    initialize the
    Trie with an 
    empty root node */
    constructor() {
        this.root = new Node();
    }

    /* Inserts a word into the Trie
    Time Complexity O(len), where len
    is the length of the word */
    insert(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.containsKey(ch)) {
                /* Create a new node for
                the letter if not present */
                node.put(ch, new Node());
            }
            // Move to the next node
            node = node.get(ch);
        }
        // Mark the end of the word
        node.setEnd();
    }

    /* Returns if the word
    is in the trie */
    search(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.containsKey(ch)) {
                /* If a letter is 
                not found, the word 
                is not in the Trie */
                return false;
            }
            // Move to the next node
            node = node.get(ch);
        }
        /* Check if the last node
        marks the end of a word */
        return node.isEnd();
    }

    /* Returns if there is any word in the
    trie that starts with the given prefix */
    startsWith(prefix) {
        let node = this.root;
        for (let ch of prefix) {
            if (!node.containsKey(ch)) {
                /* If a letter is not 
                found, there is
                no word with the 
                given prefix */
                return false;
            }
            // Move to the next node
            node = node.get(ch);
        }
        // Prefix Found
        return true;
    }
}

