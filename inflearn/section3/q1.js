// 회문문자열

function solution(s){
    // 방법 1
    s = s.toUpperCase();
    const len = s.length;

    for (let i = 0; i < Math.floor(len/2); i++) {
        if (s[i] !== s[len - 1 - i]) return "NO";
    }

    return "YES";

    // 방법 2
    s = s.toUpperCase();
    return s.split('').reverse().join('') === s.toUpperCase() ? "YES" : "NO";    
}

let str="gooG";
console.log(solution(str));