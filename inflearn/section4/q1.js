// 자리수의 합

function solution(n, arr){
    let max = Number.MIN_SAFE_INTEGER;
    let answer = 0;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for(let x of String(arr[i])) {
            sum += Number(x);
        }
        if (max < sum) {
            max = sum;
            answer = arr[i];
        }
        else if (max === sum) {
            answer = arr[i] < answer ? answer : arr[i];
        }
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));