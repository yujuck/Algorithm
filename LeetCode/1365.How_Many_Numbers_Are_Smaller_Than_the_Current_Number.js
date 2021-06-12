/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let count = 0;
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) continue;
            else if (nums[i] > nums[j]) count++;
        }
        answer.push(count);
        count = 0;
    }
    return answer;
};