class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encStr = '';
        for(let s of strs){
            encStr += s.length + '#' + s;
        }
        console.log(encStr);
        return encStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // 5#HELLO5#WORLD
        let res = [];
        let i = 0;
        while(i < str.length){
            let j = i;

            // finging #
            while(str[j] !== '#'){
                j++;
            }

            //len of curr word;
            let len = Number(str.substring(i, j));
            //curr word
            let word = str.substring(j+1 , j +1+len);

            res.push(word);

             // move pointer
            i = j + 1 + len;

        }
        return res;
        
    }
}
