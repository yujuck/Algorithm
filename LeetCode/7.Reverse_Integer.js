/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let numArr = x.toString().split('');
    let result;
    
    if (x < 0) {
        numArr.reverse().pop();
        result = numArr.join('') * -1;
    } 
    else result = numArr.reverse().join('');
    
    let outRange = Number(result) >= Math.pow(2, 31) - 1 || Number(result) <= Math.pow(2, 31) * -1
    return outRange ? 0 : Number(result);
};



/**
 * Math.abs를 써서 if문 없이 해보기도 했는데 runtime이랑 메모리사용이 위에꺼보다 안좋았음..
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let reverseNum = Number(Math.abs(x).toString().split('').reverse().join(''));
    let result = x > 0 ? reverseNum : reverseNum * -1;
    let outRange = result >= Math.pow(2, 31) - 1 || result <= Math.pow(2, 31) * -1

    return outRange ? 0 : result;
};