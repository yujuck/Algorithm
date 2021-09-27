// 홀수

function solution(arr){
    let answer=[];
    answer = arr.filter(x => x % 2 === 1);

    let total = 0;
    for (let n of answer) {
        total += n;
    }

    return `${total}, ${Math.min(...answer)}`;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));