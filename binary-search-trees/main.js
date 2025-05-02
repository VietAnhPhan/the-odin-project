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

// console.log(uniqueArray[10]);

const tree = new Tree(uniqueArray, 0, uniqueArray.length - 1);

// tree.buildTree(uniqueArray, 0, uniqueArray.length - 1);

tree.insertNode(tree.root, 1000);
tree.insertNode(tree.root, 2000);
tree.insertNode(tree.root, 9000);
tree.insertNode(tree.root, 3000);

// tree.prettyPrint(tree.root);

// tree.deleteItem(tree.root, 8);
// console.log("========================Delete 8=========================");
// tree.prettyPrint(tree.root);
// const node1000 = tree.find(tree.root, 1000);

// console.log(
//   "========================Find node value 1000========================="
// );

// console.log(node1000);

// tree.levelOrder((node) => {
//   console.log(node.data);
// });

// tree.postOrder(tree.root, (node) => {
//   console.log(node.data);
// });
console.log(tree.depth(tree.root, 3000));
