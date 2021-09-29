// 중복문자제거

function solution(s) {
    // 방법 1
    return [...new Set(s)].join("");

    // 방법 2
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === i) answer += s[i];
    }
    return answer;

    // + 특정 문자 개수 구하기
    let answer = 0;
    let idx = s.indexOf("k"); // k 첫번째 위치
    while (idx !== -1) {
        answer++;
        idx = s.indexOf("k", idx + 1); // 찾은 위치의 뒤에서 찾도록 변경
    }
    return answer;
}

console.log(solution("ksekkset"));
