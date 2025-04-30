import { LinksList } from "../linkedlists/LinkedList.js";

export class HashSet {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = [];
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key) {
    this.doubleCapacity();
    const index = this.hash(key);
    // console.log(index);

    if (index < 0 || index >= this.capacity.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (!this.buckets[index]) {
      const list = new LinksList();
      this.buckets[index] = list;
    }

    // list.append([key, value]);
    // this.buckets[index].push([key, value]);
    this.buckets[index].append(key);
    // console.log(this.buckets[index]);
  }

  get(key) {
    // const hashedKey = this.hash(key);

    // if (!this.buckets[hashedKey]) return null;

    // return key === this.buckets[hashedKey][0]
    //   ? this.buckets[hashedKey][1]
    //   : null;
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];
    let headList = bucket.getHead();

    while (headList) {
      if (headList.value === key) {
        return headList.value;
      }

      headList = headList.nextNode;
    }

    return null;

    // return this.buckets
    //   .filter((item) => item)
    //   .flatMap((item) => item.filter((pair) => pair[0] === key))[0][1];
  }

  entries() {
    const entries = this.buckets
      .filter((item) => item)
      .map((item) => {
        let headList = item.getHead();
        const array = [];
        while (headList) {
          array.push(headList.value);

          headList = headList.nextNode;
        }

        return array;
      })
      .flatMap((item) => item);

    return entries;
  }

  getCapacity() {
    return this.capacity;
  }

  doubleCapacity() {
    if (this.loadFactor * this.length() >= 16) this.capacity *= 2;
  }

  keys() {
    return this.buckets
      .filter((item) => item)
      .map((item) => {
        let headList = item.getHead();
        const array = [];

        while (headList) {
          array.push(headList.value);

          headList = headList.nextNode;
        }
        return array;
      })
      .flatMap((item) => item);
  }

  length() {
    // let count = 0;

    return this.buckets
      .filter((item) => item)
      .reduce((count, item) => {
        count += item.size();
        return count;
      }, 0);
  }

  has(key) {
    return this.get(key) ? true : false;
  }

  remove(key) {
    // const hashedKey = this.hash(key);

    // if (!this.buckets[hashedKey]) return false;

    // this.buckets[hashedKey] = "";

    // return true;

    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];
    let headList = bucket.getHead();
    let index = 0;
    while (headList) {
      if (headList.value === key) {
        bucket.removeAt(index);
        return true;
      }

      headList = headList.nextNode;
      index++;
    }

    return false;
  }
}
