import { Product } from "./dataTypes.js";
function processArray(data, func) {
    return data.map((item) => func(item));
}
let selectName = (p) => p.name;
let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
let names = processArray(products, selectName);
names.forEach((name) => console.log(`Name: ${name}`));
