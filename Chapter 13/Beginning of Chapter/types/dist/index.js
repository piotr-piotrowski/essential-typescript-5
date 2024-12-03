import { Product } from "./dataTypes.js";
function convertProduct(p) {
    return { name: p.name, price: `$${p.price.toFixed(2)}` };
}
let kayak = convertProduct(new Product("Kayak", 275));
console.log(`Product: ${kayak.name}, ${kayak.price}`);
