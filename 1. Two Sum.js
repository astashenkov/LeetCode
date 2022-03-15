var twoSum = function(nums, target) {
    let output = [];
    nums.forEach((num, i) => {
        for (let j = i; j <= nums.length - 1; j++) {
            if (num + nums[j+1] === target) {
                output.push(i);
                output.push(j+1);
            }
        }
    });
    return output;
}