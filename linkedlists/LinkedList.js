import { Node } from "./Node.js";

class LinksList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newLastNode = new Node(value);
    if (this.head == null) {
      this.head = newLastNode;
      this.tail = newLastNode;
    } else {
      let lastNode = this.head;
      while (lastNode.nextNode) lastNode = lastNode.nextNode;
      lastNode.nextNode = newLastNode;
      this.tail = newLastNode;
    }
  }

  prepend(value) {
    const newFirstNode = new Node(value);
    newFirstNode.nextNode = this.head;
    this.head = newFirstNode;
  }

  size() {
    let count = 0;

    if (!this.head) {
      return count;
    } else {
      count++;
    }

    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      count++;
    }

    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (!this.head) {
      console.log("The list is empty now!");
      return null;
    }

    if (index == this.size - 1) return this.tail;

    if (index > this.size() - 1) {
      console.log("The node at " + index + " not found!");
      return null;
    }

    let firstIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (firstIndex == index) return currentNode;

      firstIndex++;
      currentNode = currentNode.nextNode;
    }
  }

  pop() {
    if (!this.head) {
      console.log("The list is empty now!");
      return;
    }

    let prevLastNode = this.head;

    while (prevLastNode) {
      if (prevLastNode.nextNode == this.tail) {
        prevLastNode.nextNode = null;
        this.tail = prevLastNode;
      }

      prevLastNode = prevLastNode.nextNode;
    }
  }

  toString() {
    if (!this.head) {
      console.log("The list is empty now!");
      return;
    }

    let string = "";
    let currentNode = this.head;
    while (currentNode) {
      string += `( ${currentNode.value} )`;
      if (currentNode.nextNode) string += " -> ";
      currentNode = currentNode.nextNode;
    }

    return string;
  }

  contains(value) {
    if (!this.head) {
      console.log("The list is empty now!");
      return;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value == value) return true;

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    if (!this.head) {
      console.log("The list is empty now!");
      return;
    }

    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      if (currentNode.value == value) return index;

      currentNode = currentNode.nextNode;
      index++;
    }

    return null;
  }

  insertAt(value, index) {
    if (!this.head) {
      console.log("The list is empty now!");
      return;
    }

    if (index == 0) {
      this.prepend(value);
      return this.head;
    }

    const prevNode = this.at(index - 1);
    const indexNode = this.at(index);

    if (!indexNode) {
      return null;
    }

    const newNode = new Node(value);

    prevNode.nextNode = newNode;
    newNode.nextNode = indexNode;

    return newNode;
  }

  removeAt(index) {
    if (!this.head) {
      console.log("The list is empty now!");
      return;
    }

    if (index == 0) {
      this.head = this.head.nextNode;
      return;
    }

    const prevNode = this.at(index - 1);
    const indexNode = this.at(index);

    if (!indexNode) {
      return null;
    }

    prevNode.nextNode = indexNode.nextNode;
  }
}

export { LinksList };
