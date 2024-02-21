// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
function longestOnes(nums, k) {
    var left = 0;
    var curr = 0;
    var ans = 0;
    for (var right = 0; right < nums.length; right++) {
        if (nums[right] == 0) {
            curr++;
        }
        while (curr > k) {
            if (nums[left] == 0) {
                curr -= 1;
            }
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
