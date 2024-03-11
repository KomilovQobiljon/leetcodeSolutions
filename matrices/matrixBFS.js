const directions = [
  [-1,0], // up
  [0,1], // right
  [1,0], // down
  [0, -1] // left
];
class Node {
  constructor(val, next = null){
    this.val = val;
    this.next = next;
  }
}
class Queue {
  length = 0;
  constructor(head = null, tail = null){
    this.head = head;
    this.tail = tail;
  }
  queue(val){
    const newNode = new Node(val);
    if(!this.tail){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  dequeue(){
    if(!this.head) return null;
    const ans = this.head;
    this.head = this.head.next;
    if(!this.head) this.tail = null;
    return ans.val;
    this.length--;
  }
}
const matrixBFS = function(matrix) {
  const visited = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

  // const searchQueue = new QueueObj();
  const values = [];
  const queue = new Queue();
  queue.queue([0,0]);
  let currentPos = queue.dequeue();
  while(currentPos){
    const row = currentPos[0];
    const col = currentPos[1];
    
    if(row<0 || col<0 || matrix[0].length <= col || matrix.length <= row || visited[row][col]){
      currentPos = queue.dequeue();
      continue;
    };
    visited[row][col] = true;
    values.push(matrix[row][col]);
    
    directions.forEach(direction => {
      queue.queue([row + direction[0], col + direction[1]]);
    })
    currentPos = queue.dequeue();
  }
  return values;
}

const a = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]
];
console.log(matrixBFS(a));