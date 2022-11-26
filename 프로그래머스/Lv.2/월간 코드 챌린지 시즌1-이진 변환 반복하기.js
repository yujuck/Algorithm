function solution(s) {
    let sArr = s.split('');
    let zeroCount = 0;
    let count = 0;

    while (1) {
        const removeZero = sArr.filter(el => el === '1');
        zeroCount += sArr.length - removeZero.length;
        count++;
        sArr = Number(removeZero.length).toString(2).split('');
        if (sArr.length === 1 && sArr[0] === '1') break;
    }
    return [count, zeroCount]
}