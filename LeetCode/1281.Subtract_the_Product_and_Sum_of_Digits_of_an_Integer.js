/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    const s = String(n);
    let product = 1;
    let sum = 0;
    for (let x of s) {
        product *= Number(x);
        sum += Number(x);
    }
    return product - sum;
};