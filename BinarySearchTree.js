import TRAVERSAL_ORDERS from './constants.js';
import Node from "./Node.js";

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  //Insert a new node into the BST
  insert(value) {
    const node = new Node(value);
    if (this.root === null)
      this.root = node;
    else
      this.insertNode(this.root, node);
  }

  traverse(order, node) {
    switch (order) {
      case TRAVERSAL_ORDERS.PREORDER:
        this.traversePreOrder(node);
        break;
      case TRAVERSAL_ORDERS.INORDER:
        this.traverseInOrder(node);
        break;
      case TRAVERSAL_ORDERS.POSTORDER:
        this.traversePostOrder(node);
        break;
      default:
        this.traversePreOrder(node);
    }
  }

  remove(value) {
    let root = this.getRoot();
    if (root === null) // its an empty tree, because root node is null;
      console.log('Empty tree. No node deleted');
    else               // tree is not empty, lets find and delete the node.
      root = this.removeNode(root, value);
  }

  removeNode(node, value) {
    if (node.value === value) { // we have found the node to be deleted

      if (node.count > 1) { // because our tree allows duplicates, if current node has more then 1 items, we just remove 1 of them.
        node.count -= 1;
        return node;
      }
      // if no children for this node. easy to delete
      if (node.left === null && node.right === null) {
        return null;
      }
      // if node has right child but not left child, node will be replaced by the right child.
      if (node.left === null) {
        return node.right;
      }
      // if node has left child but not right child, node will be replaced by the left child.
      if (node.right === null) {
        return node.left;
      }
      // at this point we know that this node has both right and left children. So its not easy to replace. 
      // What we need is to find a node, which is bigger then this node but smaller then all other nodes in the tree.
      // lets find that node.
      const tempNode = node.right;
      while (tempNode.left !== null) { // because we know that, we can find the value in right sub-tree and it should be the left most leaf of the sub-tree.
        tempNode = tempNode.left;
      }
      // replace the value of the node with the value of newly found node. 
      node.value = tempNode.value;
      // correct the order in the right sub-tree
      node.right = this.removeNode(node.right, tempNode.value);
      return node;
    }
    // if value is less then current node's value, then it will be on the left side of the tree, we will look for it in the left sub-tree.
    else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    }
    // if value is bigger then current node's value, then it will be on the right side of the tree and we will look for it in the right sub-tree.
    else {
      node.right = this.removeNode(node.right, value);
      return node;
    }
  }

  // in Pre-order traversal we visit the root node first, then we visit left sub-tree (if any) and in the last we visit the right node or sub-tree (if any).
  traversePreOrder(node) {
    if (node !== null) {
      console.log(node.value, `(${node.count})`);
      this.traversePreOrder(node.left);
      this.traversePreOrder(node.right);
    }
  }

  // in In-order traversal we visit the left node or sub-tree (if any) first, then we visit root node and in the last we visit the right node or sub-tree (if any).
  traverseInOrder(node) {
    if (node !== null) {
      this.traverseInOrder(node.left);
      console.log(node.value, `(${node.count})`);
      this.traverseInOrder(node.right);
    }
  }

  // in Post-order traversal we visit the left node or sub-tree (if any) first, then we visit the right node or sub-tree (if any) and in last we visit root node.
  traversePostOrder(node) {
    if (node !== null) {
      this.traversePostOrder(node.left);
      this.traversePostOrder(node.right);
      console.log(node.value, `(${node.count})`);
    }
  }

  insertNode(root, node) {
    // if the value is duplicate then we just increment the count of the node.
    if (root.value === node.value)
      root.count += 1;
    // if the value is less then the value of the root then we will pass it to the left sub-tree.
    else if (node.value < root.value)
      if (root.left === null)
        root.left = node;
      else
        this.insertNode(root.left, node)
    // if the value is greater then the root, then this needs to be passed to right sub-tree.
    else if (node.value > root.value)
      if (root.right === null)
        root.right = node;
      else
        this.insertNode(root.right, node);
  }
}


export default BinarySearchTree;