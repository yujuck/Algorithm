// 유효한 팰린드롬

function solution(s){
    const newString = s.replace(/\W/g, '').toUpperCase();
    const len = newString.length;

    for(let i = 0; i < Math.floor(len/2); i++) {
        if (newString[i] !== newString[len - 1 - i]) return "NO";
    }

    return "YES";

    // 방법 2
    s = s.replace(/[^a-z]/g, '').toUpperCase();
    if (s.split('').reverse().join('') !== s) return "NO";
    return "YES"
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));