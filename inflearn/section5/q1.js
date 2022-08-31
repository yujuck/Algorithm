// 두 배열 합치기

function solution(arr1, arr2){
    let answer = [];
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    let p1 = p2 = 0;

    while (p1 < arr1Length && p2 < arr2Length) {
        if (arr1[p1] < arr2[p2]) answer.push(arr1[p1++]);
        else answer.push(arr2[p2++]);
    }

    while(p1 < arr1Length) answer.push(arr1[p1++]);
    while(p2 < arr2Length) answer.push(arr2[p2++]);

    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));