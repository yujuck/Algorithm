// 일곱난쟁이

function solution(arr) {
    let answer = arr;
    let sum = arr.reduce((acc, cur) => acc + cur, 0);

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (sum - (arr[i] + arr[j]) === 100) {
                arr.splice(j, 1); // answer에 얕은 복사가 되어있어서 arr에 작업한 내용이 그대로 answer에도 적용됨
                arr.splice(i, 1);

                break;
            }
        }
    }
    return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
