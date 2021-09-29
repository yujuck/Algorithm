// 대소문자 변환

function solution(s) {
    // 방법 1
    let answer = "";
    for (let x of s) {
        if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }
    return answer;

    // 방법 2
    let answer = "";
    for (let x of s) {
        if (x === x.toUpperCase()) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }
    return answer;
}

console.log(solution("StuDY"));
