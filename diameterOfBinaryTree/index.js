// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Note: The length of path between two nodes is represented by the number of edges between them.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    
  if(!root) return 0;
  let diameter = 0; 
  
  function getDepth(node) {
      if(!node) return 0;
      const leftDepth = getDepth(node.left);
      const rightDepth = getDepth(node.right); 
      diameter = Math.max(diameter,leftDepth+rightDepth);
      return Math.max(leftDepth,rightDepth)+1;
  }
  
  getDepth(root);
  return diameter;
};



module.exports = diameterOfBinaryTree;