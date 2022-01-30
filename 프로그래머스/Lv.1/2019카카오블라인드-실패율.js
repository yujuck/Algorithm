function solution(N, stages) {
    let step = [];
    step = Array.from({length: N}, ()=>0);
    let last = 0;
    let len = stages.length;

    for (let i of stages) {
        if (i <= N) {
            step[i-1] += 1    
        } else {
            last++;
        }
    }
    
    step = step.map((el, i) => {
        
        let failureRate = el / len;
        len -= el;
        if (i === N) {
            failureRate = el / (last + len)
        }
        if (el === 0) failureRate = 0;
        return failureRate;
    });
    
    let origin = step.slice();
    step.sort((a,b) => b - a);
    let result = [];
    step.map((el, i) => {
        let idx = origin.indexOf(el);
        result.push(idx+1);
        origin[idx] = -1;
    });
    return result;
}