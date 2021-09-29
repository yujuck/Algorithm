// 대문자 찾기

function solution(s) {
    // 방법 1
    let answer = 0;

    for (let x of s) {
        if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) answer++;
    }
    return answer;

    // 방법 2
    let answer = 0;
    for (let x of s) {
        if (x === x.toUpperCase()) answer++;
    }
    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
