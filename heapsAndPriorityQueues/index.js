class Heap {
  constructor(comparator = (a,b) => a > b){
    this._arr = [];
    this._comparator = comparator;
  }
  _swap(idx, parentIdx){
    const temp = this._arr[idx];
    this._arr[idx] = this._arr[parentIdx];
    this._arr[parentIdx] = temp;
  }
  _parent(idx){
    return Math.floor((idx - 1) / 2)
  }
  insert(num){
    this._arr.push(num);
    let idx = this._arr.length - 1;
    let parentIdx = this._parent(idx);
    while(this._comparator(this._arr[idx],this._arr[parentIdx])){
      this._swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this._parent(idx);
    }
  }
  delete(num){
    const idx = this._arr.indexOf(num);
    if(idx === -1){
      console.log("Not available");
      return;
    }
    if(idx === this.size() - 1){
      this._arr.pop();
      return
    }
    if(idx + 1 === this.size() - 1){
      this._arr[idx] = this._arr.pop();
      return
    }
    this._arr[idx] = this._arr.pop();
    
    let parent = idx;
    let left = this._comparator(this._arr[idx+1],this._arr[idx+2])
    let child = left ? idx+1 : idx+2;
    while(this._comparator(this._arr[child],this._arr[parent])){
      this._swap(parent, child);
      parent = child;
      left = this._comparator(this._arr[(child*2 + 1)],this._arr[(child*2 + 2)]);
      child = left ? child*2 + 1 : child*2 + 2;
    }
  }
  size(){
    return this._arr.length;
  }
  isEmpty(){
    return this._arr.length === 0;
  }
  peek(){
    return this._arr[0];
  }
}

const minHeap = new Heap((a,b)=>a<b);
minHeap.insert(50);
minHeap.insert(45);
minHeap.insert(15);
minHeap.insert(10);
minHeap.insert(35);
minHeap.insert(40);
minHeap.insert(25);
minHeap.insert(42);
console.log(minHeap.size(), minHeap.isEmpty(),minHeap.peek())
minHeap.delete(45)
console.log(minHeap);
