
import TRAVERSAL_ORDERS from './constants.js';
import BinarySearchTree from './BinarySearchTree.js';

// create an instance of binary search tree.
const BST = new BinarySearchTree();

// insert some nodes into it.

BST.insert(3);
BST.insert(5);
BST.insert(6);
BST.insert(8);
BST.insert(1);
BST.insert(4);
BST.insert(2);
BST.insert(5); // duplicate
BST.insert(7);


// lets get the root of this tree; so we can start traversing it.

const root = BST.getRoot();

//lets do the traversal

//first Pre order
console.log('PRE - ORDER Traversal')
BST.traverse(TRAVERSAL_ORDERS.PREORDER, root);
console.log('\n');

// In order
console.log('IN - ORDER Traversal')
BST.traverse(TRAVERSAL_ORDERS.INORDER, root);
console.log('\n');

// Post order
console.log('POST - ORDER Traversal')
BST.traverse(TRAVERSAL_ORDERS.POSTORDER, root);
console.log('\n');

//Remove a node
BST.remove(2);

// lets check if node is actually removed.
console.log('Check if node is removed')
BST.traverse(TRAVERSAL_ORDERS.INORDER, root);
console.log('\n');