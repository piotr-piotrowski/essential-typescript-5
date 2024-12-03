import { Product } from "./dataTypes.js";
function total(data, propName) {
    return data.reduce((t, item) => (t += Number(item[propName])), 0);
}
let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
console.log(`Total: ${total(products, "price")}`);
