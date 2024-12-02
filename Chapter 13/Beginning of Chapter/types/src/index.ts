import { Employee, Product } from "./dataTypes.js";

let myVar: keyof Product = "name";
myVar = "price";
// Type '"someOtherName"' is not assignable to type 'keyof Product'.ts(2322)
// myVar = "someOtherName"

function getValue<T, K extends keyof T>(item: T, keyname: K) {
  console.log(`Value: ${item[keyname]}`);
}

let p = new Product("Running Shoes", 100);
getValue<Product, "name">(p, "name");
getValue(p, "price");

let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");
