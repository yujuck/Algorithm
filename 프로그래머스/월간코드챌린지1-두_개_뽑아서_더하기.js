function solution(numbers) {
    var answer = [];
    for (let a = 0; a < numbers.length; a++) {
        for (let b = a + 1; b < numbers.length; b++) {
            let sum = numbers[a] + numbers[b];
            if (!answer.includes(sum)) answer.push(sum);
        }
    }
    
    return answer.sort((a,b) => a - b);
}

// 사람들이 감탄한 풀이
// function solution(numbers) {
//     const temp = []

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             temp.push(numbers[i] + numbers[j])
//         }
//     }

//     const answer = [...new Set(temp)]

//     return answer.sort((a, b) => a - b)
// }