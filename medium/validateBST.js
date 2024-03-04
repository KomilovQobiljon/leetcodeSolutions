var isValidBST = function(root, min = null, max = null) {
  if(!root) return true;
  if(root.left === null && root.right === null && min === null && max === null) {
      return true;
  }
  const tooSmall = min !== null && root.val <= min;
  const tooBig = max !== null && root.val >= max;
  if(tooBig || tooSmall) return false;

  const nextMax = max === null ? root.val : Math.min(max, root.val);
  const nextMin = min === null ? root.val : Math.max(min, root.val);
  const left = isValidBST(root.left, min, nextMax);
  const right = isValidBST(root.right, nextMin, max);
  
  return left && right;
};