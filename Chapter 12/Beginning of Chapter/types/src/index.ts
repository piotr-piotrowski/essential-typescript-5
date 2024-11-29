import { Person, Product } from "./dataTypes.js";

let people = [
  new Person("Bob Smith", "London"),
  new Person("Dora Peters", "New York"),
];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

class DataCollection<T> {
  private items: T[] = [];

  constructor(intialItems: T[]) {
    this.items.push(...intialItems);
  }

  add(newItem: T) {
    this.items.push(newItem);
  }

  getItem(index: number): T {
    return this.items[index];
  }
}

let peopleData = new DataCollection<Person>(people);

let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
