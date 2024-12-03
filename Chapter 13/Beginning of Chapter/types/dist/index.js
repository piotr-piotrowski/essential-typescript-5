import { Product } from "./dataTypes.js";
function getValue(data, propName) {
    if (Array.isArray(data)) {
        return data[0][propName];
    }
    else {
        return data[propName];
    }
}
let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
console.log(`Array Value: ${getValue(products, "price")}`);
console.log(`Single Total: ${getValue(products[0], "price")}`);
