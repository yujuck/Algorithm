function solution(d, budget) {
    let sum = 0, count = 0;
    d.sort((a, b) => a - b);

    for (let i = 0; i <d.length; i++) {
        if (sum > budget) break;
        
        if (sum + d[i] <= budget) {
            sum += d[i];
            count++;
        } 
    }
    
    return count;
}