// A를 #으로

function solution(s) {
    // 방법 1
    const newWord = s.replaceAll("A", "#");
    return newWord;

    // 방법 2
    let answer = "";
    for (let x of s) {
        if (x === "A") answer += "#";
        else answer += x;
    }
    return answer;

    // 방법 3
    let answer = s.replace(/A/g, "#");
    return answer;
}

let str = "BANANA";
console.log(solution(str));
