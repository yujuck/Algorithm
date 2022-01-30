function solution(arr1, arr2) {
    var answer = [];
    let cnt = 0;
    arr1.map((el) => {
        let x = [];
        for(let i=0; i<el.length; i++) {
            for(let j = cnt; j<=cnt; j++){
                x.push(parseInt(el[i])+parseInt(arr2[j][i]));
            }
        }
        answer.push(x);
        cnt++;
    })
    return answer;
}