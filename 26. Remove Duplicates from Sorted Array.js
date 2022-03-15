var removeDuplicates = function(nums) {
    let count = 0,
        last = NaN;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== last) {
            last = nums[i];
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};

console.log(removeDuplicates([1,1,2,4,4,6,6,9]));