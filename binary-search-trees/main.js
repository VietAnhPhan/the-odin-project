import { Tree } from "./Tree.js";

const mergeSort = function (array, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    mergeSort(array, p, q);
    mergeSort(array, q + 1, r);
    merge(array, p, q, r);
  }
};

const merge = function (array, p, q, r) {
  let lowHalf = [];
  let highHalf = [];

  let k = p;
  let i;
  let j;
  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  // Repeatedly compare the lowest untaken element in
  //  lowHalf with the lowest untaken element in highHalf
  //  and copy the lower of the two back into array
  while (i < lowHalf.length && j < highHalf.length) {
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i++;
    } else {
      array[k] = highHalf[j];
      j++;
    }
    k++;
  }

  // Once one of lowHalf and highHalf has been fully copied
  //  back into array, copy the remaining elements from the
  //  other temporary array back into the array
  while (i < lowHalf.length) {
    array[k] = lowHalf[i];
    i++;
    k++;
  }
  while (j < highHalf.length) {
    array[k] = highHalf[j];
    j++;
    k++;
  }
};

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const uniqueArray = [];

array.map((number) => {
  if (!uniqueArray.includes(number)) {
    uniqueArray.push(number);
  }
});

mergeSort(uniqueArray, 0, uniqueArray.length - 1);

const tree = new Tree(uniqueArray, 0, uniqueArray.length - 1);

console.log("================================Balance Tree");
tree.buildTree(uniqueArray, 0, uniqueArray.length - 1);
tree.prettyPrint();

console.log("================================Insert several Nodes");
tree.insertNode(1000);
tree.insertNode(2000);
tree.insertNode(9000);
tree.insertNode(3000);
tree.prettyPrint();

console.log("=========================================Delete node of 8");
tree.deleteItem(tree.root, 8);
tree.prettyPrint(tree.root);

console.log(
  "================================================= Find node value 1000"
);
const node1000 = tree.find(1000);
console.log(node1000);

console.log("=============================== Print tree by level order");
tree.levelOrder((node) => {
  console.log(node.data);
});

console.log("=============================== Print tree by PreOrder");
tree.preOrder(tree.root, (node) => {
  console.log(node.data);
});

console.log("=============================== Print tree by postOrder");
tree.postOrder(tree.root, (node) => {
  console.log(node.data);
});

console.log("=============================== Print tree by InOrder");
tree.inOrder(tree.root, (node) => {
  console.log(node.data);
});
console.log("=============================== Depth of node 1000");
console.log(tree.depth(1000));

console.log("=============================== Height of node 67");
const node = tree.find(67);

console.log(tree.heightRecursion(node));

console.log("================================== Is tree balanced?");
console.log(tree.isBalanced() ? "Yes" : "No");

console.log("================================== Rebalance Tree");
const reBalanceTree = tree.reBalance();

tree.prettyPrint(reBalanceTree);
