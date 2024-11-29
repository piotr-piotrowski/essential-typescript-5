import { Person, Product, City } from "./dataTypes.js";

let people = [
  new Person("Bob Smith", "London"),
  new Person("Dora Peters", "New York"),
];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("Londong", 8136000), new City("Paris", 2141000)];

class DataCollection<T extends { name: string }> {
  private items: T[] = [];

  constructor(intialItems: T[]) {
    this.items.push(...intialItems);
  }

  add(newItem: T) {
    this.items.push(newItem);
  }

  getNames(): string[] {
    return this.items.map((item) => item.name);
  }

  getItem(index: number): T {
    return this.items[index];
  }
}

let peopleData = new DataCollection<Person>(people);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
console.log(`Person Names: ${peopleData.getNames().join(", ")}`);

let productData = new DataCollection<Product>(products);
let firstProduct = productData.getItem(0);
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);
console.log(`Product Names: ${productData.getNames().join(", ")}`);

let cityData = new DataCollection<City>(cities);
console.log(`City Names: ${cityData.getNames().join(", ")}`);
