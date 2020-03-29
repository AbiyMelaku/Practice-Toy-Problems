class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


let root1 = new TreeNode(1)
root1.left = new TreeNode(3)
root1.right = new TreeNode(2)
root1.left.left = new TreeNode(5)



let root2 = new TreeNode(2)
root2.left = new TreeNode(1)
root2.right = new TreeNode(3)
root2.left.right = new TreeNode(4)
root2.right.right = new TreeNode(7)


  
  
  
function mergeTrees(t1, t2){
  // if one node is missing 
  if(!t1){
    return t2
  } else if (!t2){
    return t1
  } else {
    // if both nodes exists 
    t1.val = t1.val + t2.val
    t1.left = mergeTrees(t1.left, t2.left)
    t1.right = mergeTrees(t1.right, t2.right)
  }
  
  return t1;
}


console.log(mergeTrees(root1, root2))