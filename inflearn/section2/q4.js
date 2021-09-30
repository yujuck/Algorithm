// 점수 계산

function solution(arr) {
    const withoutZero = arr.join("").split(0);
    const correctList = withoutZero.filter(Boolean);

    const answer = correctList.reduce((acc, cur) => {
        let score = 0;
        for (let i = 0; i < cur.length; i++) {
            score += i + 1;
        }
        return acc + score;
    }, 0);

    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
