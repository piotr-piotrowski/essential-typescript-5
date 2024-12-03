import { Product } from "./dataTypes.js";

function getValue<T, P extends keyof T>(data: T, propName: P): T[P] {
  if (Array.isArray(data)) {
    return data[0][propName];
  } else {
    return data[propName];
  }
}

let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
// src/index.ts(12,48): error TS2345: Argument of type '"price"' is not assignable to parameter of type 'keyof Product[]'.
// console.log(`Array Value: ${getValue(products, "price")}`);
console.log(`Single Total: ${getValue(products[0], "price")}`);
