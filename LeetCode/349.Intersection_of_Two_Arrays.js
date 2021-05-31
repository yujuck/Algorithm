/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let newArr1 = new Set(nums1);
    let newArr2 = new Set(nums2);
    let result = [];
    
    for (let x of newArr1) {
        if (newArr2.has(x)) result.push(x);
    }
    
    return result;
};