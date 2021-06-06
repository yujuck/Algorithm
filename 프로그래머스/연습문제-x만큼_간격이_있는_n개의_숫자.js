function solution(x, n) {
    var answer = [];
    if(x<0) {
        for(let i = x; i>= x*n; i+=x) {
            answer.push(i)
        }
    } else if(x>0){
        for(let i = x; i<= x*n; i+=x) {
            answer.push(i)
        }    
    } else {
        for(let i = 0; i<n; i++) {
            answer[i] = 0;
        }
    }
    return answer;
}