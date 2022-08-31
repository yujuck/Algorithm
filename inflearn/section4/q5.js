// K번째 큰 수

function solution(n, k, card){
    let list = new Set();

    for (let a = 0; a < n - 2; a++) {
        for (let b = a + 1; b < n - 1; b++) {
            for (let c = b + 1; c < n; c++) {
                const sum = card[a] + card[b] + card[c];
                list.add(sum);
            }
        }
    }

    let arr = Array.from(list).sort((a, b) => b - a);
    
    return arr[k-1];
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));