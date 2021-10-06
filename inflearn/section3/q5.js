// 문자열 압축

function solution(s){
    let answer = '';
    let cnt = 1;
    s = s + " ";  // 문법 오류 방지
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) cnt++;
        else {
            answer += cnt === 1 ? `${s[i]}` : `${s[i]}${cnt}`;
            cnt = 1;
        }
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));