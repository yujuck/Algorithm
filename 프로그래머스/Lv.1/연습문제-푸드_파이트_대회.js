function solution(food) {
    let answer = '';

    for (let i = 1; i < food.length; i++) {
        let repeat = parseInt(food[i] / 2);
        if (repeat !== 0) answer += `${i}`.repeat(repeat);
    }

    return answer + "0" + answer.split("").reverse().join("");
}