function solution(absolutes, signs) {
    let answer = absolutes.reduce((acc, cur, i) => {
        return acc += cur * (signs[i] ? 1 : -1)
    }, 0);
    return answer;
}