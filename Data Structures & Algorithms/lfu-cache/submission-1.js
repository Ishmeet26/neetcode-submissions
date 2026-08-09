class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.cnt = 1;
        this.next = null;
        this.prev = null;
    }
}
// create a doubly linked list
class List {
    constructor() {
        this.size = 0; // size of Dll
        this.head = new Node(-1, -1); //dummy head
        this.tail = new Node(-1, -1); //dummy tail;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addFront(node) {
        let temp = this.head.next;
        node.next = temp;
        node.prev = this.head;
        this.head.next = node;
        temp.prev = node;
        this.size++;
    }

    removeNode(node) {
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.size--;
    }
}

class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.maxCacheSize = capacity;
        this.curSize = 0;
        this.minFreq = 0;
        //freq map for key and node reference;
        this.keyNode = new Map();
        //freq map for freq & List;
        this.freqListMap = new Map();
    }
    updateFreqListMap(node) {
        // Remove from Hashmap
        this.keyNode.delete(node.key);

        //update freqListMap
        this.freqListMap.get(node.cnt).removeNode(node);
        //if removed node was the last node of that freq.

        if (node.cnt === this.minFreq && this.freqListMap.get(node.cnt).size === 0) {
            this.minFreq++; // why not this.minFreq = node.cnt +1;
        }

        //crerate a dumy list;
        let nextHigherFreqList = new List();

        //check if the listexist with next freq;
        if (this.freqListMap.has(node.cnt + 1)) {
            nextHigherFreqList = this.freqListMap.get(node.cnt + 1);
        }
        node.cnt += 1;
        nextHigherFreqList.addFront(node);
        this.freqListMap.set(node.cnt, nextHigherFreqList);
        this.keyNode.set(node.key, node);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        //if the key exists, return the value;
        if (this.keyNode.has(key)) {
            let node = this.keyNode.get(key);
            let val = node.val;
            //update updateFreqListMap after accessing the node;
            this.updateFreqListMap(node);
            return val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.maxCacheSize === 0) return;
        //if the key exists update it
        if (this.keyNode.has(key)) {
            let node = this.keyNode.get(key);
            node.val = value;
            this.updateFreqListMap(node);
        } else {
            // if the cache size is reached capacity;
            if (this.curSize === this.maxCacheSize) {
                //remove the lfu node from min freq;
                let list = this.freqListMap.get(this.minFreq);
                //remove node ref from map;
                this.keyNode.delete(list.tail.prev.key);
                list.removeNode(list.tail.prev);
                this.curSize--;
            }
            this.curSize++;
            this.minFreq = 1; //new element is being inserted,
            //  which was not present hence it will be at 1 freq position

            // Create a dummy list
            let listFreq = new List();
            if (this.freqListMap.has(this.minFreq)) {
                //point to already existing list of min freq if exist;
                listFreq = this.freqListMap.get(this.minFreq);
            }
            let node = new Node(key, value);
            listFreq.addFront(node);

            this.keyNode.set(key, node);
            this.freqListMap.set(this.minFreq, listFreq);
        }
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
