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

  prettyPrint(node, prefix = "", isLeft = true) {
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

  insertNode(root, value) {
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

    if (root.data < value) this.insertNode(root.right, value);
    if (root.data > value) this.insertNode(root.left, value);
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

  find(root, value) {
    if (root.data === value) {
      return root;
    }

    if (root.data < value) return this.find(root.right, value);
    if (root.data > value) return this.find(root.left, value);
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

  depth(root, value, count = 0) {
    if (root === null) {
      return null;
    }

    if (root.data === value) {
      return count;
    }

    count++;
    // console.log(`${count} ${root.data}`);
    if (value > root.data) return this.depth(root.right, value, count);
    if (value < root.data) return this.depth(root.left, value, count);
  }
}
