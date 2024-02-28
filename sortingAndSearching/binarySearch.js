const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
  if(left <= right){
      const index = left + Math.floor((right - left) / 2);
      if(arr[index] > target){
          return binarySearch(arr, target, left, index - 1);
      }else if(arr[index] < target){
          return binarySearch(arr, target, index + 1, right);
      }else{
          return index;
      }
  }
}
arr = [5,7,7,8,8,10,10,14,14,14,18,18,18,18,18,18,20,20,24,24,25,25,25];
console.log(binarySearch(arr))