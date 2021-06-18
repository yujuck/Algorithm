/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    const arr = s.split(' ');
    let result = Array.from({length: arr.length}, () => '');
    
    for (let w of arr) {
        let len = w.length;
        result[w[len-1]-1] = w.slice(0, len-1)
    }
    
    return result.join(' ');
};