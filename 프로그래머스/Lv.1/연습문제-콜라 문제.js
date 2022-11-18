function solution(a, b, n) {
    var answer = 0;

    while (n >= a) {
        let quotient = parseInt(n / a);
        answer += quotient * b;
        n = n - a * quotient + quotient * b;
    }
 
    return answer;
}