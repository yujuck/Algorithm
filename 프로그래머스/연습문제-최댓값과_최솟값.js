function solution(s) {
    let arr = s.split(' ');
    
    return Math.min(...arr) + ' ' + Math.max(...arr);
}

// string 상태의 숫자에서도 Math.max, Math.min 사용할 수 있다.
// Math.max.apply(null, arr) 처럼 spread 연산자 대신 apply로 숫자 배열을 넣어서 값을 얻을 수도 있다.
