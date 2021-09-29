// 가장 긴 문자열

function solution(s) {
    let max = Number.MIN_SAFE_INTEGER;
    let answer = "";

    for (let word of s) {
        if (word.length > max) {
            max = word.length;
            answer = word;
        }
    }

    return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
