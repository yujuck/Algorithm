function solution(s) {
    let arr = s.toLowerCase().split(' ');
    
    let result = arr.map(el => {
        if (el !== '') {
            let first = el[0].toUpperCase();
            let rest = el.slice(1);
            return first + rest
        } 
    });
    
    return result.join(' ');
}