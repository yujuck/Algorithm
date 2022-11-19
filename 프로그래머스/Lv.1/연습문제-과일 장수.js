function solution(k, m, score) {
    let answer = 0;
    let sortScore = score.sort((a, b) => b - a);
    let box = [];

    for (let i of score) {
        box.push(i);
        if (box.length === m) {
            answer += Math.min(...box) * m;
            box = [];
        }
    }
    return answer;
}