// 중복단어제거

function solution(s) {
    // 방법 1
    return [...new Set(s)].join(" ");

    // 방법 2
    const answer = s.filter((el, idx) => s.indexOf(el) === idx);
    return answer.join(" ");
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
