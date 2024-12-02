import { Employee, Product } from "./dataTypes.js";
let myVar = "name";
myVar = "price";
// Type '"someOtherName"' is not assignable to type 'keyof Product'.ts(2322)
// myVar = "someOtherName"
function getValue(item, keyname) {
    return item[keyname];
}
let p = new Product("Running Shoes", 100);
console.log(getValue(p, "name"));
console.log(getValue(p, "price"));
let e = new Employee("Bob Smith", "Sales");
console.log(getValue(e, "name"));
console.log(getValue(e, "role"));
