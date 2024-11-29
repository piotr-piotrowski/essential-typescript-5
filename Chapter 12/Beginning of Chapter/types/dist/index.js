import { Person, Product, City } from "./dataTypes.js";
let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"),
];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("Londong", 8136000), new City("Paris", 2141000)];
class DataCollection {
    items = [];
    constructor(intialItems) {
        this.items.push(...intialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItem(index) {
        return this.items[index];
    }
}
let peopleData = new DataCollection(people);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
console.log(`Person Names: ${peopleData.getNames().join(", ")}`);
let productData = new DataCollection(products);
let firstProduct = productData.getItem(0);
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);
console.log(`Product Names: ${productData.getNames().join(", ")}`);
let cityData = new DataCollection(cities);
console.log(`City Names: ${cityData.getNames().join(", ")}`);
