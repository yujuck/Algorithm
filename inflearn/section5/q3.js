// 연속 부분 수열 1

function solution(m, arr){
    let cnt = 0;
    let left = 0;
    let sum = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        
        if (sum === m) cnt++;
        while(sum >= m) {
            sum -= arr[left++];
            if (sum === m) cnt++;
        }
    }
    return cnt;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));