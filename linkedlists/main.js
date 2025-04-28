import { LinksList } from "./LinkedList.js";

const list = new LinksList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// list.pop();
// list.pop();
// list.pop();
// list.pop();
// console.log(list.getTail());
// console.log(list.contains("parrot1"));
// console.log(list.at(3));
// console.log(list.insertAt("elephant", 1));
// console.log(list.removeAt(5));
// list.prepend("bear");
console.log(list.toString());
