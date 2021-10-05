// 숫자만 추출

function solution(str){
    const numStr = str.replace(/\D/g, '');
    return Number(numStr);

    // 방법 2
    let answer = "";
    for (let x of str) {
        if (!isNaN(x)) answer += x;
    }
    return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));