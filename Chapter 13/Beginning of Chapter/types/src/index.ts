import { Employee, Product } from "./dataTypes.js";

let myVar: keyof Product = "name";
myVar = "price";
// Type '"someOtherName"' is not assignable to type 'keyof Product'.ts(2322)
// myVar = "someOtherName"

function getValue<T, K extends keyof T>(item: T, keyname: K): T[K] {
  return item[keyname];
}

let p = new Product("Running Shoes", 100);
console.log(getValue<Product, "name">(p, "name"));
console.log(getValue(p, "price"));

let e = new Employee("Bob Smith", "Sales");
console.log(getValue(e, "name"));
console.log(getValue(e, "role"));
