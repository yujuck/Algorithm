// 대문자로 통일

function solution(s) {
    // 방법 1
    return s.toUpperCase();

    // 방법 2
    let answer = "";
    for (let x of s) {
        let num = x.charCodeAt();
        if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
        else answer += x;
    }
    return answer;

    // 방법 3
    let answer = "";
    for (let x of s) {
        if (x === x.toLowerCase()) answer += x.toUpperCase();
        else answer += x;
    }
    return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
