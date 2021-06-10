function solution(brown, yellow) {
    let answer = [];
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) {
            let j = yellow / i;
            if (i * 2 + j * 2 + 4 === brown) {
                answer = i >= j ? [i + 2, j + 2] : [j + 2, i + 2];
                break;
            }
        }
    }
    return answer;
}