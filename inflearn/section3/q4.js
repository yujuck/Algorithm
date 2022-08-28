// 가장 짧은 문자거리

function solution(s, t){
    const answer = [];
    let p = s.length + 1;

    for(let i in s) {
        if (s[i] !== t) {
            p++;
            answer.push(p);            
        } else {
            p = 0;
            answer.push(p);
        }
    }

    p = s.length + 1;
    for (let i = s.length - 1; i >=0; i--) {
        if (s[i] !== t) {
            p++;
            answer[i] = Math.min(answer[i], p);
        } else p = 0;
    }

    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));