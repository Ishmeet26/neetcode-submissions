class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        let st = new Set(wordList);
        let queue = [];
        let front = 0;
        queue.push([beginWord, 1]);
        st.delete(beginWord);

        while (front < queue.length) {
            let [word, steps] = queue[front++];
            if (word === endWord) return steps;
            for (let i = 0; i < word.length; i++) {
                for (let ch = "a".charCodeAt(); ch <= "z".charCodeAt(); ch++) {
                    let newWord =
                        word.substring(0, i) + String.fromCharCode(ch) + word.substring(i + 1);
                    if (st.has(newWord)) {
                        st.delete(newWord);
                        queue.push([newWord, steps + 1]);
                    }
                }
            }
        }
        return 0;
    }
}
