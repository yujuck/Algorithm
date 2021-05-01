function solution(lottos, win_nums) {
    let zeroCount = 0;
    let count = 0;
    
    for (let i in lottos) {
        if (win_nums.includes(lottos[i])) count ++;
        lottos[i] === 0 ? zeroCount++ : null;
    }
    
    let max = count + zeroCount <= 1  ? 6 : 7 - (count + zeroCount);
    let min = count  <= 1  ? 6 : 7 - count;
    
    return [max, min];   
}

// 흠.. 코테 볼 때 이렇게 안풀었던거 같긴 한데.. 기억이 안나..