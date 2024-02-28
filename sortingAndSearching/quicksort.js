const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
const partition = (arr, left, right) => {
  let i = left;
  for(let j = left; j < right; j++){
    if(arr[j] < arr[right]){
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
}
const quicksort = (arr, left, right) => {
  if(left < right){
    const partitionIdx = partition(arr, left, right);
    quicksort(arr, left, partitionIdx - 1);
    quicksort(arr, partitionIdx + 1, right);
  }
}

const list = [3,2,1,7,5,8,6,4];
quicksort(list, 0, list.length - 1);
console.log(list)