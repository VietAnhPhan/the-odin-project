# Binary Search Trees of The Odin Project

Binary Search Trees is one of the data structure in Computer Science to organizing and storing data in sorted manner, Binary Search Tree starts with root node, following by left or right or both left and right node, which left nodes always lower than right nodes <br/><br/>
This practice demonstrates building a balance tree, finding node, deleteing node, printig all nodes by level order, PreOrder, InOrder, PostOrder, Inserting node, Rebalance a tree, determining a tree whether balance or not.

## Installation

You need to install NodeJS to run the code in console

## Explain

Provide an array that can be duplicated, unsorted items: <br>
const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]; <br>
Sorted an array by mergeSort algorithms <br>
Remove duplicate be creating an new array to add items which does not exist in an new empty array <br>
const uniqueSortedArray = [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]; <br>

Define a class Tree:
<ul>
  <li>Constructor will recieve array, left index, right index to instantiate the root properties that will be the root of balance tree</li>
  <li>buildTree</li>
  <li>prettyPrint</li>
 <li>insertNode</li>
<li>getSmallestRight</li>
<li>deleteItem</li>
<li>find</li>
<li>levelOrder</li>
<li>inOrder</li>
<li>preOrder</li>
<li>postOrder</li>
<li>depth</li>
<li>heightRecursion</li>
<li>isBalancedRec</li>
<li>isBalanced</li>
<li>storeInorder</li>
<li>reBalance</li>

</ul>

buildTree:
<li>The algorithm behind <code>buildTree</code> is that we take the middle of the array by summing the left index and right index, then dividing by 2.</li>
<li>Create a new node as the root and store the data from the middle of the input array.</li>
<li>Repeat the process to find the middle of the left side of the array (left subarray).</li>
<li>Repeat the process to find the middle of the right side of the array (right subarray).</li>
<li>While doing that, if the left index becomes greater than the right index, stop the recursion and return <code>null</code>.</li>
<li>Once all nodes are added, the tree is finalized.</li>


## Credit

Thanks to The Odin Project contributors

## License

[MIT](https://choosealicense.com/licenses/mit/)
