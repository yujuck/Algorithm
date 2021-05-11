function solution(nums) {
    var answer = 0;

    for (let a = 0; a < nums.length - 2; a++) {
        for (let b = a + 1; b < nums.length - 1; b++) {
            for (let c = b + 1; c < nums.length; c++) {
                if (isPrimeNumber(nums[a] + nums[b] + nums[c])) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}

function isPrimeNumber(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

// 소수 구하기 => 에라토스테네스의 체 알고리즘