function solution(s) {
    let arr = s.split('');
    let stack = [arr[0]];
    let top = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === stack[top]) {
            stack.pop();
            top--;
        } else {
            stack.push(arr[i]);
            top++;
        }        
    }
    
    return stack.length > 0 ? 0 : 1;    
}