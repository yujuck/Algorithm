// 뒤집은 소수

function solution(arr){
    const answer = [];
    for (let num of arr) {
        const reverseNum = String(num).split('').reverse().join('');
        
        if (isPrime(Number(reverseNum))) answer.push(Number(reverseNum));
    }
    return answer.join(' ');
}

function isPrime(n) {
    if (n <= 1) return false;
    
    for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));