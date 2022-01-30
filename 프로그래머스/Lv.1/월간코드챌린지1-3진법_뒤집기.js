function solution(n) {
    const ternary = [];
    let answer = 0;
    
    if (n === 1 || n === 2) return n;
    
    while (n >= 3) {
        ternary.unshift(parseInt(n % 3));
        n = parseInt(n / 3);
        
        if (n < 3) ternary.unshift(n);
    }
     
    for (let i = 0; i < ternary.length; i++) {
        answer += ternary[i] * Math.pow(3, i)
    }
    return answer;
}

/* 다른 사람 풀이
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

Number에 toString([radix])을 쓰면 radix에 넣은 수를 기준으로 한 진수 값의 문자열을 반환함
n.toString(3)은 문자열이니까 [...n.toString(3)]은 그 문자열을 하나씩 풀어서 배열로 만듦
ex) (45).toString(3) == "1200"
    [...(45).toString(3)] == ["1", "2", "0", "0"]
parseInt도 두번쨰 인자에 radix를 optional하게 줄 수 있다.
parseInt("0021", 3) - "0021"을 3진법으로 만들어서 number로 반환
 */