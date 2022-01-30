function solution(answers) {
    const x = [1,2,3,4,5];
    const y = [2,1,2,3,2,4,2,5];
    const z = [3,3,1,1,2,2,4,4,5,5];
    
    let cnt = [0,0,0];
    let answer = [];
    
    for(let i in answers) {
        if (x[i%5] === answers[i]) cnt[0]++;
        if (y[i%8] === answers[i]) cnt[1]++;
        if (z[i%10] === answers[i]) cnt[2]++;
    }
    
    let max = Math.max(cnt[0],cnt[1],cnt[2]);
    
    for(let i in cnt) {
        if(cnt[i] == max) {
            let idx = parseInt(i);
            answer.push(idx+1);
        }
    }
    return answer;
}