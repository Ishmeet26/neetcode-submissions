class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.Node = function (key, val) {
            return { key: key, val: val, next: null, prev: null };
        };

        this.head = this.Node(-1, -1);
        this.tail = this.Node(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.cap = capacity;
        this.m = new Map();
    }

    addNode(aNode) {
        let temp = this.head.next;
        aNode.next = temp;
        aNode.prev = this.head;
        temp.prev = aNode;
        this.head.next = aNode;
    }

    deleteNode(dNode) {
        let delPrev = dNode.prev;
        let delNext = dNode.next;
        delNext.prev = delPrev;
        delPrev.next = delNext;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        //check if map has the key and node reference;
        if (this.m.has(key)) {
            let resNode = this.m.get(key);
            let resVal = resNode.val;

            //delete node reference from map
            this.m.delete(key);
            this.deleteNode(resNode);
            this.addNode(resNode);

            //update map with new reference for this node
            this.m.set(key, this.head.next);
            return resVal;
        } else {
            //key doesnt exist
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        //check if the key exist in the map;
        if (this.m.has(key)) {
            let existingNode = this.m.get(key);
            this.m.delete(key);
            this.deleteNode(existingNode);
        }

        // map doesnt has the key value, insert this value, but before inserting check if cap is reached
        if (this.m.size === this.cap) {
            //delete lease recently used;
            this.m.delete(this.tail.prev.key);
            this.deleteNode(this.tail.prev);
        }

        //insert new node
        this.addNode(this.Node(key, value));
        this.m.set(key, this.head.next);
    }
}
