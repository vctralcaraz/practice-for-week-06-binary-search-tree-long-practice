const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  if(rootNode.left !== null) {
    return findMinBST(rootNode.left);
  } 
  return rootNode.val;
}

function findMaxBST (rootNode) {
  // Your code here
  if(rootNode.right !== null) {
    return findMaxBST(rootNode.right);
  }
  return rootNode.val;
}

function findMinBT (rootNode) {
  // Your code here
  let min = Infinity;

  let queue = [];
  queue.push(rootNode)

  while(queue.length > 0) {

    let node = queue.shift();

    if(node.val < min) {
      min = node.val;
    }

    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }

  return min;
}

function findMaxBT (rootNode) {
  // Your code here
  let max = -Infinity;

  let queue = [];
  queue.push(rootNode)

  while(queue.length > 0) {

    let node = queue.shift();

    if(node.val > max) {
      max = node.val;
    }

    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }

  return max;
}

function getHeight (rootNode) {
  // Your code here
  if(rootNode === null) return -1;

}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}