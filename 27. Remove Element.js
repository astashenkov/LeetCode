var removeElement = function(nums, val) {
    let counter = 0;
    let fin = nums.length-1;
    nums.forEach((e, i) => {
        if (e === val) {
            for (let j = fin; j > i; j--) {
                if (nums[j] !== val) {
                    nums[i] = nums[j];
                    fin = j-1;
                    break;
                }
            }
            counter++;
        }
    });
    return nums.length - counter;
};