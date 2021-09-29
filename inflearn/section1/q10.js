// 문자 찾기

function solution(s, t) {
    // 방법 1
    let answer = 0;

    for (let x of s) {
        if (x === t) answer++;
    }

    return answer;

    // 방법 2
    let answer = s.split(t).length; // 해당 문자를 구분자로 해서 분리
    return answer - 1; // 예를 들어 split해서 4개가 생겼다면 구분자로 한 문자가 3개 있다는 게 되기 때문에 -1 해서 return
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
