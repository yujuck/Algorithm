// 보이는 학생

function solution(arr) {
    let answer = 1;
    let highest = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i] && highest < arr[i]) {
            answer++;
            highest = arr[i];
        }
    }

    return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
