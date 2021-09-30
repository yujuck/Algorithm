// 가위바위보

function solution(a, b) {
    const answer = a.reduce((acc, cur, idx) => {
        let result = "";
        if ((a[idx] === 1 && b[idx] === 3) || (a[idx] === 3 && b[idx] === 1)) {
            result = a[idx] > b[idx] ? "B" : "A";
        } else if (a[idx] === b[idx]) {
            result = "D";
        } else {
            result = a[idx] > b[idx] ? "A" : "B";
        }
        return [...acc, result];
    }, []);

    return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
