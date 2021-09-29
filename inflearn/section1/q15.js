// 가운데 문자 출력

function solution(s) {
    const idx = Math.floor(s.length / 2);

    // 방법 1
    if (s.length % 2 !== 0) return s[idx];
    else return `${s[idx - 1]}${s[idx]}`;

    // 방법 2
    let answer;
    if (s.length % 2 === 1) answer = s.substring(idx, idx + 1);
    else answer = s.substring(idx - 1, idx + 1);
    return answer;
}

console.log(solution("good"));
