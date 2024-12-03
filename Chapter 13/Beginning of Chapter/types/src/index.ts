import { Product } from "./dataTypes.js";

type MappedProduct = {
  [P in keyof Product]: Product[P];
};

let p: MappedProduct = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);
