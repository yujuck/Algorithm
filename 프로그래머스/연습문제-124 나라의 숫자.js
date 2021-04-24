/* 
    124 나라가 있습니다.
    124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

    1. 124 나라에는 자연수만 존재합니다.
    2. 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다. 
    자연수 n이 매개변수로 주어질 때, 
    n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.
*/
function solution(num) {
    let answer = '';
    while (num > 0) {
        let rest = num % 3;
        num = Math.floor(num / 3);        
        answer = "412"[rest] + answer;
        if(rest == 0) {
            num -= 1;
        }
    }
    return answer;
}