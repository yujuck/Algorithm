function solution(X, Y) {
    let answer = '';
    let XArr = X.split("");
    let YArr = Y.split("");
    
    for (let i = 9; i > -1 ; i--) {
        let x = XArr.filter(el => el == i);
        let y = YArr.filter(el => el == i);
        
        if (x.length === 0 || y.length === 0) continue;
        else {
            const count = x.length < y.length ? x.length : y.length;
            answer += `${i}`.repeat(count)
        }
    }

    if (answer == '') return "-1";
    
    let isZeroString = answer.split("").every(el => el == 0);
    if(isZeroString) return "0";
    else return answer;
}