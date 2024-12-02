import { Product } from "./dataTypes.js";
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
class Collection {
    items;
    constructor(initialItems = []) {
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach((newItem) => this.items.set(newItem.name, newItem));
    }
    get(name) {
        return this.items.get(name);
    }
    get count() {
        return this.items.size;
    }
    values() {
        return this.items.values();
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
[...productCollection.values()].forEach((p) => console.log(`Product: ${p.name}, ${p.price}`));
