// 봉우리

function solution(arr) {
    let cnt = 0;

    // 방법 1
    // 상 x-1, y 하 x+1, y 좌 x, y-1 우 x, y+1
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[x].length; y++) {
            const up = x-1 >= 0 ? arr[x-1][y] : 0;
            const down = x+1 === arr.length ? 0 : arr[x+1][y];
            const left = y-1 >= 0 ? arr[x][y-1] : 0;
            const right = y+1 === arr.length ? 0 : arr[x][y+1];

            const max = Math.max(up, down ,left, right);
            if (arr[x][y] > max) cnt++;
        }
    }

    return cnt;


    // 방법 2
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                let nx = x + dx[k];
                let ny = y + dy[k];
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[x][y]) {
                    flag = 0;
                    break;
                }
            }
            if(flag) answer++;
        }
    }
}

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
];
console.log(solution(arr));
