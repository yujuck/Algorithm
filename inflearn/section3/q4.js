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

    // 방법 2
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