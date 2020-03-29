/*
        1
    2       3
                4
                
         1                1
      /     \     
     2      3         L 2   R 2     
              \
              4       L2    R3 ==> 3
                
Input - root 
output - integer
Time constraints - O(N)
Auxillary space contstraint - O(N)

//recursive function

//base case
  //if input is null return zero
//recursive case
  //store left branch recursive call
  //store right branch recursive call
  
  // return check max of left branch and right branch add one
  

*/



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

  
function longestPathinBT(root){
    //base case
    if( root === null ) return 0;
    //recursive
    let leftChild = longestPathinBT(root.left)+1;
    let rightChild = longestPathinBT(root.right)+1;
    let longest = Math.max(leftChild, rightChild);
    return longest;
}



/*


*/

console.log(longestPathinBT(root1));



















