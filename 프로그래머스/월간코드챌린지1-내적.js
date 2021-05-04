// 재귀함수 써보기
function solution(a, b) {
    let answer = recursive(a, b, a.length-1);

    return answer ;
}
function recursive(a, b, n) {
    if (n == 0) return a[n] * b[n];
    return a[n] * b[n] + recursive(a, b, n-1)
}

// reduce 함수 사용
function solution(a, b) {
    return a.reduce((acc, cur, i) => acc += a[i] * b[i], 0);
}
