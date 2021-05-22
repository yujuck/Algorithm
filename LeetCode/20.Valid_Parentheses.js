/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let arr = s.split('');
    let stack = [];
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];
    
    if (closeBrackets.includes(arr[0])) return false;
    
    for (let x of arr) {
        if (openBrackets.includes(x)) stack.push(x);
        else {
            let idx = closeBrackets.indexOf(x);
            if (idx !== openBrackets.indexOf(stack[stack.length-1])) return false;
            else stack.pop();
        }
    }
    
    if (stack.length === 0) return true;
    else return false;
}