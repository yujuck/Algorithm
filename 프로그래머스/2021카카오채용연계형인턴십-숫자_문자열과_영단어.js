function solution(s) {
    const strArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for (const numString of strArr) {
        s = s.split(numString).join(strArr.indexOf(numString))
    }
    
    return Number(s);
}