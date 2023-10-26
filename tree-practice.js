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

  let height = 0;

  if(rootNode.left) {
    let lHeight = getHeight(rootNode.left);
    if(lHeight >= height) height = lHeight + 1;
  }

  if(rootNode.right) {
    let rHeight = getHeight(rootNode.right);
    if(rHeight >= height) height = rHeight + 1;
  }

  return height;
}

function balancedTree (rootNode) {
  // Your code here
  if(rootNode.left === null && rootNode.right === null) return true;
  else if(rootNode.left === null || rootNode.right === null) {

    if(Math.abs(getHeight(rootNode.left) - getHeight(rootNode.right)) <= 1) return true;
    return false;
  }

  return balancedTree(rootNode.left) && balancedTree(rootNode.right);
}

function countNodes (rootNode) {
  // Your code here
  let queue = [];
  queue.push(rootNode);
  let count = 0;

  while(queue.length > 0) {
    let node = queue.shift();
    count++;

    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }

  return count;
}

function getParentNode (rootNode, target) {
  // Your code here

  if(rootNode.val === target) return null;

  let queue = [];
  queue.push(rootNode);
  let parentNode = undefined;

  while(queue.length > 0) {
    let node = queue.shift();

    let left = node.left;
    let right = node.right;

    if((left !== null && left.val === target) || (right !== null && right.val === target)) {
      parentNode = node;
      break;
    }

    if(node.left !== null) queue.push(node.left);
    if(node.right !== null) queue.push(node.right);
  }

  return parentNode;
}

function inOrderPredecessor (rootNode, target) {
  // Your code here

  if(rootNode === null) return null;

  if(rootNode.val >= target) return inOrderPredecessor(rootNode.left, target);
  else {

   const right = inOrderPredecessor(rootNode.right, target);

   if(right) return right;
   else return rootNode.val; 
  }
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let parentNode = getParentNode(rootNode, target)
  
  // Undefined if the target cannot be found
  if (parentNode === undefined) return undefined;

  // Set target based on parent
  let targetNode;
  if (parentNode === null) targetNode = rootNode;
  else targetNode = (parentNode.left && parentNode.left.val === target) ? parentNode.left : parentNode.right; 
  let children = ( Number(targetNode.left !== null) + Number(targetNode.right !== null)) 

  switch(children) {
    case 0 :
      // Case 0: Zero children and no parent:
      //   return null
      if (parentNode === null) return null;
      
      // Case 1: Zero children:
      //   Set the parent that points to it to null
      (parentNode.left && parentNode.left.val === target)? parentNode.left = null : parentNode.right = null;
    
      break;
    case 2:
      // Case 2: Two children:
      //  Set the value to its in-order predecessor, then delete the predecessor
      let val = inOrderPredecessor(rootNode, target);
      
      deleteNodeBST(rootNode, val) 
      targetNode.val = val;

      //  (Replace target node with the left most child on its right side, 
      //  or the right most child on its left side.
      //  Then delete the child that it was replaced with.)
      break;
    case 1:
      // Case 3: One child:
      //   Make the parent point to the child
      let child = targetNode.left ? targetNode.left : targetNode.right;
      (parentNode.left && parentNode.left.val === target) ? parentNode.left = child : parentNode.right = child;
      break;
  }
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