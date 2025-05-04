import { Node } from "./Node.js";

export class Tree {
  constructor(array = [], left = 0, right = -1) {
    this.root = this.buildTree(array, left, right);
  }

  buildTree(array, left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    // console.log(mid);
    const root = new Node(array[mid]);

    root.left = this.buildTree(array, left, mid - 1);
    root.right = this.buildTree(array, mid + 1, right);

    // this.root = root;
    return root;
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insertNode(value, root = this.root) {
    if (root === null) {
      const newNode = new Node(value);
      this.root = newNode;

      return;
    }

    if (root.data < value && root.right === null) {
      const newNode = new Node(value);
      root.right = newNode;
    }
    if (root.data > value && root.left === null) {
      const newNode = new Node(value);
      root.left = newNode;
    }
    if (root.data === value) {
      return;
    }

    if (root.data < value) this.insertNode(value, root.right);
    if (root.data > value) this.insertNode(value, root.left);
    if (root.data === value) return;
  }

  getSmallestRight() {
    let current = this.root.right;
    while (current.left) {
      current = current.left;
    }

    return current;
  }

  deleteItem(root, value) {
    if (root.data === value && root.left === null && root.right === null) {
      return null;
    }

    if (root.data === value && root.right === null && root.left !== null) {
      root = root.left;
      root.left = null;

      return root;
    } else if (
      root.data === value &&
      root.left === null &&
      root.right !== null
    ) {
      root = root.right;
      root.right = null;

      return root;
    }
    // console.log(root);
    if (root.data > value) root.left = this.deleteItem(root.left, value);
    if (root.data < value) root.right = this.deleteItem(root.right, value);
    if (root.data === value) {
      let smallestRight = this.getSmallestRight();
      root.data = smallestRight.data;

      this.deleteItem(root.right, smallestRight.data);
    }

    return root;
  }

  find(value, root = this.root) {
    if (root.data === value) {
      return root;
    }

    if (root.data < value) return this.find(value, root.right);
    if (root.data > value) return this.find(value, root.left);
  }

  levelOrder(callback) {
    if (!callback) throw new Error("Callback is missing!");

    const queue = [this.root];

    while (queue.length > 0) {
      const front = queue[0];
      callback(front);

      if (front.left) queue.push(front.left);
      if (front.right) queue.push(front.right);

      queue.shift();
    }
  }

  inOrder(root, callback) {
    if (!root) return;

    this.inOrder(root.left, callback);
    callback(root);
    this.inOrder(root.right, callback);
  }

  preOrder(root, callback) {
    if (!root) return;

    callback(root);
    this.preOrder(root.left, callback);
    this.preOrder(root.right, callback);
  }

  postOrder(root, callback) {
    if (!root) return;

    this.postOrder(root.left, callback);
    this.postOrder(root.right, callback);
    callback(root);
  }

  depth(value, root = this.root, count = 0) {
    if (root === null) {
      return null;
    }

    if (root.data === value) {
      return count;
    }

    count++;
    // console.log(`${count} ${root.data}`);
    if (value > root.data) return this.depth(value, root.right, count);
    if (value < root.data) return this.depth(value, root.left, count);
  }

  heightRecursion(root) {
    if (root === null) {
      return 0;
    }

    const left = this.heightRecursion(root.left);
    const right = this.heightRecursion(root.right);

    if (root.left || root.right) return Math.max(left, right) + 1;
    if (!root.left && !root.right) return 0;
  }

  // height(value) {
  //   let count = 0;
  //   const node = this.find(this.root, value);
  //   let left = node.left,
  //     right = node.right;

  //   while (right) {
  //     count++;
  //     right = right.right;
  //     left = right.left;

  //   }

  //   return count;
  // }

  isBalancedRec(root) {
    if (root === null) {
      return 0;
    }

    const lHeight = this.isBalancedRec(root.left);
    const rHeight = this.isBalancedRec(root.right);

    if (lHeight === -1 || rHeight === -1 || Math.abs(lHeight - rHeight) > 1)
      return -1;

    return Math.max(lHeight, rHeight) + 1;
    // if (Math.abs(left - right > 1)) return false;
  }

  isBalanced(root = this.root) {
    return this.isBalancedRec(root) > 0;
  }

  storeInorder(root = this.root, array = []) {
    if (root === null) {
      return;
    }

    this.storeInorder(root.left, array);
    array.push(root.data);
    this.storeInorder(root.right, array);

    return array;
  }

  reBalance() {
    const inOrderArray = this.storeInorder();

    return this.buildTree(inOrderArray, 0, inOrderArray.length - 1);
  }
}
