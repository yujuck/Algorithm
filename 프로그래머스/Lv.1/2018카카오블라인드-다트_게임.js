function solution(dartResult) {
    let answer = 0;
    const arr = dartResult.split('');
    const cal = [];
    let i = 0;

    const bonus = {
        S : (x) => {return Math.pow(x, 1)},
        D : (x) => {return Math.pow(x, 2)},
        T : (x) => {return Math.pow(x, 3)}
    }

    for (let a in arr) {
        if (!isNaN(arr[a])) {
            i++;
            if (arr[a] === '0' && !isNaN(arr[a-1])) {
                i--;
                cal[i-1] += arr[a];
                continue;                                
            }
            cal.push(arr[a]);

        } else if (['S', 'D', 'T'].includes(arr[a])) {
            cal[i-1] = bonus[`${arr[a]}`](cal[i-1]);
        } else {
            if (arr[a] == '*') {
                if (i-1 == 0) cal[i-1] *= 2;
                else {
                    cal[i-2] *= 2;
                    cal[i-1] *= 2;
                }
            } else {
                cal[i-1] *= -1;
            }
        }
    }
    answer = cal.reduce((acc, cur) => {return acc + cur}, 0);
    return answer;
}