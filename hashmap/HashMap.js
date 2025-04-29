export class HashMap {
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

  set(key, value) {
    this.doubleCapacity();
    const index = this.hash(key);
    console.log(index);

    if (index < 0 || index >= this.capacity.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (!this.buckets[index]) this.buckets[index] = [];

    this.buckets[index].push([key, value]);
  }

  get(key) {
    // const hashedKey = this.hash(key);

    // if (!this.buckets[hashedKey]) return null;

    // return key === this.buckets[hashedKey][0]
    //   ? this.buckets[hashedKey][1]
    //   : null;

    return this.buckets
      .filter((item) => item)
      .flatMap((item) => item.filter((pair) => pair[0] === key))[0][1];
  }

  entries() {
    const entries = this.buckets.filter((item) => item);

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
      .flatMap((item) => item.map((pair) => pair[0]));
  }

  values() {
    return this.buckets
      .filter((item) => item)
      .flatMap((item) => item.map((pair) => pair[1]));
  }

  length() {
    let count = 0;

    this.buckets
      .filter((item) => item)
      .flatMap((item) => item.map(() => count++));

    return count;
  }

  has(key) {
    return this.get(key) ? true : false;
  }

  remove(key) {
    const hashedKey = this.hash(key);

    if (!this.buckets[hashedKey]) return false;

    this.buckets[hashedKey] = "";

    return true;
  }
}
