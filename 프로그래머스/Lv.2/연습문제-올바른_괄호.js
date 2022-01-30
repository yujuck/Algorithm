function solution(s){
    const arr = s.split('');
    let stack = [];
    
    if(arr[0] === ')') return false;
    else {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] === '(') stack.push('(');
            else stack.pop();
        }
    }
    
    return stack.length == 0 ? true : false;
}

solution("()()");  // true
solution("(())()")  // true
solution(")()(")  // false