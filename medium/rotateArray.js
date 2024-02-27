/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if(nums.length<2) return nums;
  if(k > nums.length) k = k%nums.length;
  const reverse = (left, right) => {
      while(left < right){
          let temp = nums[left];
          nums[left] = nums[right];
          nums[right] = temp;
          left++;
          right--;
      }
  }
  reverse(0, nums.length-1);
  console.log(nums)
  reverse(0, k-1);
  console.log(nums)
  reverse(k, nums.length-1);
  console.log(nums)
};