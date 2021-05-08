function solution(s, n) {
    const arr = s.split('');
    let answer = '';
    let zCode = 'z'.charCodeAt();
    let ZCode = 'Z'.charCodeAt();
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ' ') {
            answer += ' ';
            continue;
        }
        let code;

        if (arr[i].charCodeAt() + n > zCode && arr[i].charCodeAt() >= 97 ) {
            code = 96 + (arr[i].charCodeAt() + n - zCode);
        } else if (arr[i].charCodeAt() + n > ZCode && arr[i].charCodeAt() <= 90) {
            code = 64 + (arr[i].charCodeAt() + n - ZCode);
        } else {
            code = arr[i].charCodeAt() + n;
        }

        answer += String.fromCharCode(code);
    }
    return answer;
}