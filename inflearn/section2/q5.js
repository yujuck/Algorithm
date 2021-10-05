// 등수 구하기

function solution(arr) {
    const answer = [];
    for(let i = 0; i < arr.length; i++) {
        let grade = 1;
        for(let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) grade++;
        }
        answer.push(grade);
    }

    return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
