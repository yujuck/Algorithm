// 문자열 압축

function solution(s){
    let idx = 0;
    let answer = '';

    while(idx < s.length) {
        let cnt = (s.lastIndexOf(s[idx]) - idx + 1);

        if (cnt === 1) answer += s[idx];
        else answer += s[idx] + cnt;

        idx = s.lastIndexOf(s[idx]) + 1;
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));