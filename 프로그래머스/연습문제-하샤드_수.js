function solution(x) {
    let sum = 0;
    (x).toString().split('').map((el)=> {
        sum += parseInt(el);
    });
    
    return x%sum ? false : true;
}