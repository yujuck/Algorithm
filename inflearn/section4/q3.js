// 멘토링

function solution(test){
    let answer = 0;
    let m = test.length;
    let n = test[0].length;

    for (let i = 0; i < test.length; i++) {
        for (let j = 0; j < test.length; j++) {
            let cnt = 0;

            for (let k = 0; k < m; k++) {
                let pi = pj = 0;
                for (let s = 0; s < n; s++) {
                    if (test[k][s] === i) pi = i;
                    if (test[k][s] === j) pj = j;
                }

                if (pi < pj) cnt++;
            }
            if (cnt === m) answer++;
        }
    }
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));