// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// function sortedSquares(nums: number[]): number[] {
//   const squaredNums = nums.map((num) => num * num);
//   squaredNums.sort((a, b) => a - b);
//   return squaredNums;
// }
function sortedSquares(nums) {
    var ans = [];
    var first = 0;
    var last = nums.length - 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        var square = void 0;
        console.log(nums[i]);
        if (Math.abs(nums[first]) > Math.abs(nums[last])) {
            square = nums[first];
            first++;
        }
        else {
            square = nums[last];
            last--;
        }
        ans[i] = square * square;
    }
    return ans;
}
console.log(sortedSquares([-7, -3, 2, 3, 11]));
