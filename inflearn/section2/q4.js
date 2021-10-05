// 점수 계산

// 방법 1
// 괜히 복잡하게 풀었네..;;
// function solution(arr) {
//     const withoutZero = arr.join("").split(0);
//     const correctList = withoutZero.filter(Boolean);

//     const answer = correctList.reduce((acc, cur) => {
//         let score = 0;
//         for (let i = 0; i < cur.length; i++) {
//             score += i + 1;
//         }
//         return acc + score;
//     }, 0);

//     return answer;
// }

// 방법 2
function solution(arr) {
    let cnt = 0, score = 0;
    for (let x of arr) {
        if (x === 1) {
            cnt++;
            score += cnt;
        } else cnt = 0;
    }
    return score;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
