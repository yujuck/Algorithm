function solution(numbers) {
    numbers.sort((a,b) => ''+a+b > ''+b+a ? -1 : 1);

    const findNotZero = numbers.some(num => num !== 0);
    const result = numbers.join('');
    
    return findNotZero ? result : "0";
};