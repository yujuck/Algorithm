/*
    문제 조건
    1. 문자열 길이만큼 왼쪽으로 shift (shift 되서 다시 뒤로 push됨)
    2. 문자열은 기호로만 이루오진 최대 1000개의 길이를 가짐
    3. 괄호의 짝이 정상적으로 모두 맞춰진 경우의 갯수를 리턴
    ex) "[]<>{}"의 경우 문자열의 길이인 6만큼 반복을 함
    "]<>{}[", "<>{}[]", ">{}[]", "{}[]<>", "}[]<>", "[]<>{}"
    위에서 짝이 맞는 경우는 2번, 4번, 6번 총 3개이므로 리턴은 3이 되면 된다.
 */

function test(str) {
    let arr = str.split('');
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