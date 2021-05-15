function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        let x = divisor(i);
        answer += x % 2 == 0 ? i : i * -1;
    }
    return answer;
}

function divisor(num) {
    let cnt = 0;
    for (let i = 0; i * i <= num; i++) {
        if (num % i == 0) {
            if (num / i == i) cnt ++;
            else cnt += 2;
        }
    }
    return cnt;
}