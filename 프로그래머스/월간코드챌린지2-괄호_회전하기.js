function solution(s) {
    let arr = s.split('');
    let count = 0;

    for (let i in arr) {
        matchingBracket(arr) ? count++ : null;

        let first = arr.shift();
        arr.push(first);
    }

    return count;
}

function matchingBracket(arr) {
    let openBrackets = ['[', '<', '{', '('];
    let closeBrackets = [']', '>', '}', ')'];
    let stack = [];

    if (closeBrackets.includes(arr[0])) return false;

    for (let i of arr) {
        if (openBrackets.includes(i)) {
            stack.push(i);
        } else {
            if (closeBrackets.indexOf(i) === openBrackets.indexOf(stack[stack.length - 1])) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0 ? true : false;
}