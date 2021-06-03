/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let arr = n.toString(2).split("");
    
    let result = arr.filter(el => {
        return el === '1'
    }).length;
    
    return result;
};