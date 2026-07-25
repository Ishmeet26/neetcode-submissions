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
    deleteNode(dNode) {
        let dPrev = dNode.prev;
        let dNext = dNode.next;
        dPrev.next = dNext;
        dNext.prev = dPrev;
    }
    addNode(aNode) {
        let temp = this.head.next;
        aNode.next = temp;
        aNode.prev = this.head;
        this.head.next = aNode;
        temp.prev = aNode;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        //check if exist in map, if not return -1;
        if (this.m.has(key)) {
            let node = this.m.get(key);
            let resVal = node.val;
            this.m.delete(key);
            //delete node from linkedList;
            this.deleteNode(node);
            this.addNode(node);
            this.m.set(key, this.head.next);
            return resVal;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.m.has(key)) {
            let node = this.m.get(key);
            node.val = value;
            this.m.delete(key);

            this.deleteNode(node);
        }
        if (this.m.size === this.cap) {
            let node = this.tail.prev;
            this.m.delete(node.key);
            this.deleteNode(node);
        }

        let newNode = this.Node(key, value);
        this.addNode(newNode);
        this.m.set(key, this.head.next);
    }
}
