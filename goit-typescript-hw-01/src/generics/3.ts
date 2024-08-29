function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = { name: "Alice" };
const objB = { age: 30 };

const mergeObj = merge(objA, objB);
console.log(mergeObj);
