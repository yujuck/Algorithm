// 세 수 중 최솟값

function solution(a, b, c) {
    let min;
    if (a < b) min = a;
    else min = b;

    if (c < min) min = c;
    return min;
}

console.log(solution(6, 5, 11));