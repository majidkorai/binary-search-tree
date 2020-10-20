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

  //Pre-Order Traversal
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