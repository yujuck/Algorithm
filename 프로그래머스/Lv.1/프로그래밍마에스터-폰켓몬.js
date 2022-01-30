function solution(nums) {
    const total = nums.length / 2;
    const pick = [...new Set(nums)];
    
    return pick.length < total ? pick.length : total
}