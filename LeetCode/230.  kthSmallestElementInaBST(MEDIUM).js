// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note: 
// You may assume k is always valid, 1 ? k ? BST's total elements.

// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

var kthSmallest = function(root, k) {
  var count = 0;
  var isFound = false;
  var result = null;
  //call subroutine
  inorder(root);
  //ma
  return result;
  
  function inorder(node){
    if (node !== null && !isFound){
      inorder(node.left);
      count++;
      if (count === k){
        result = node.val;
        isFound = true;
        return;
      }
      inorder(node.right);
    }
  }
};