// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

// Note:

// The number of nodes in the given list will be between 1 and 100.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

//Below solution would work if it would be an array but it is a linked list
 var middleNode = function(head) {
   const middleNodeIndex = parseInt(head.length / 2) 
   return head.slice(middleNodeIndex)
 }

// var middleNode = function(head) {
//   let targetLen = Math.ceil(getLength(head)/2);
//   return returnAtPosition(head, targetLen);
// }

var getLength = function(node) {
  let length = 0;
  while(node.next) {
      length += 1;
      node = node.next;
  }
  return length;
}

var returnAtPosition = function(node, targetLen) {
  for(let i = 0; i < targetLen; i++) {
      node = node.next;
  }
  return node;
}




module.exports = {
  middleNode,
  getLength,
  returnAtPosition
}