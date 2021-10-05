// 격자판 최대합

function solution(arr) {
    let diagonal1 = diagonal2 = 0;
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        let row = column = 0;

        for (let j = 0; j < arr[0].length; j++) {    
            row += arr[i][j];
            column += arr[j][i];

            if (i === j) diagonal1 += arr[i][j];
            if (i + j === 4) diagonal2 += arr[i][j];
        }

        answer = Math.max(answer, row, column, diagonal1, diagonal2);
    }
    return answer;
}

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];
console.log(solution(arr));
