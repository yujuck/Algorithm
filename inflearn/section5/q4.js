// 연속 부분 수열 2

function solution(m, arr){
    let answer = 0;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        while(sum > m) {
            sum -= arr[right];
        }
        answer += right - left + 1;
    }
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));
