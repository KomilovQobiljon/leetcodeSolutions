const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
  while(left <= right){
      const index = Math.floor((right + left) / 2);
      if(arr[index] > target){
          right = index - 1;
      }else if(arr[index] < target){
          left = index + 1;
      }else{
          return index;
      }
  }
  return -1;
}

const searchRange = function(nums, target){
  if(
      nums.length === 0 || 
      target > nums[nums.length - 1] || 
      target < nums[0]
  ) return [-1, -1];
  
  const firstPos = binarySearch(nums, target);
  if(firstPos === -1) return [-1, -1];
  let leftPos = firstPos
  let leftTemp;
  while(leftPos !== -1){
      leftTemp = leftPos;
      leftPos = binarySearch(nums, target, 0, leftPos - 1);
  }
  leftPos = leftTemp;
  let rightPos = firstPos;
  let rightTemp;
  while(rightPos !== -1){
      rightTemp = rightPos;
      rightPos = binarySearch(nums, target, rightPos + 1, nums.length - 1);
  }
  rightPos = rightTemp;
  return [leftPos, rightPos]
}

arr = [5,7,7,8,8,10,10,14,14,14,18,18,18,18,18,18,19,20,20,24,24,25,25,25];
arr1 = [5,7,7,8,8,10];
console.log(searchRange(arr, 18))