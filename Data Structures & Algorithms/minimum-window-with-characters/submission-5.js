class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

         if (t.length === 0) return '';

  let window = {};
  let countT = {};

  for (let c of t) {
    countT[c] = (countT[c] || 0) + 1;;

  }
  let have = 0;
  let need = Object.keys(countT).length;

  let res = [-1, -1];
  let resLen = Infinity;
  let l = 0;

  for (let r = 0; r <= s.length; r++) {
    let c = s[r];
    window[c] = (window[c] || 0) + 1;

    if (countT[c] !== undefined && window[c] === countT[c]) {
      have++;
    }

    while (have === need) {
      if ((r - l + 1) < resLen) {
        res = [l, r];
        resLen = r - l + 1;
      }
      window[s[l]]--;
      if (countT[s[l]] !== undefined && window[s[l]] < countT[s[l]]) {
        have--;
      }
      l++;
    }

  }

  const [start, end] = res;

  return resLen === Infinity ? "" : s.substring(start, end + 1);



    }
}
