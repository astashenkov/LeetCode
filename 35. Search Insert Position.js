var searchInsert = function(nums, target) {
    if (target > nums[nums.length - 1]) {
        return nums.length;
    } else if (target < nums[0] || target == nums) {
        return 0;
    } else if (nums[0] <= target && target <= nums[nums.length - 1]) {
        if (nums.includes(target)) {
            return nums.indexOf(target);
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] < target && target <= nums[i + 1]) {
                    return (i + 1);
                }
            }
        }
    }
};