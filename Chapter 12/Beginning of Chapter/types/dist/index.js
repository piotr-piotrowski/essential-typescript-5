import { Person, Product } from "./dataTypes.js";
let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"),
];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
class DataCollection {
    items = [];
    constructor(intialItems) {
        this.items.push(...intialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getItem(index) {
        return this.items[index];
    }
}
let peopleData = new DataCollection(people);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
let productData = new DataCollection(products);
let firstProduct = productData.getItem(0);
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);
