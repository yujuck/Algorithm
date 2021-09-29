// 큰 수 출력하기

function solution(arr) {
    const answer = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) answer.push(arr[i]);
    }

    return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
