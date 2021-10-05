// 가장 짧은 문자거리

function solution(s, t){
    const answer = [];

    for (let x of s.split('e')) {
        const res = [];
        for(let i = 0; i < x.length/2; i++) {
            res[i] = res[x.length - 1 -i] = i + 1;
        }

        answer.push(res.join(''));
    }
    return answer.join('0');
}

let str="teachermodee";
console.log(solution(str, 'e'));