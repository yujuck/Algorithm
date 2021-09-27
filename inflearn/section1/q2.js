// 삼각형 판단하기

function solution(a, b, c){
    let max;
    const total = a + b + c;

    if (a > b) max = a;
    else max = b;

    if (c > max) max = c;

    return total - max <= max ? "NO" : "YES";
}

console.log(solution(13, 33, 17));