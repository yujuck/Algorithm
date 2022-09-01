// 공통 원소 구하기

function solution(arr1, arr2){
    // 내가 작성한 방법
    // 이렇게 하면 시간복잡도가 높다
    // filter O(n), indexOf도 O(n)이라서 O(n^2)가 되어버림
    // sort는 O(nlogn)

    // let answer = arr1.filter(el => arr2.indexOf(el) > -1);
    // return answer.sort((a, b) => a - b);
    

    // 방법2
    let p1 = p2 = 0;
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    let answer = [];

    while(p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] === arr2[p2]) {
            answer.push(arr1[p1++]);
            p2++;
        }
        else if (arr1[p1] < arr2[p2]) p1++;
        else p2++;
    }

    return answer;
        
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));