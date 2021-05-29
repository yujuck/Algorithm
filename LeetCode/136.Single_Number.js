/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let result = nums.reduce((acc, cur) => {
        if (acc[cur]) acc[cur]++
        else acc[cur] = 1;
        
        return acc;
    }, {});
    
    for (let key of Object.keys(result)) {
        if (result[key] === 1) return key;
    }    
};