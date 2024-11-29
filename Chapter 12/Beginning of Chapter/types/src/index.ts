import { Person, Product, City, Employee } from "./dataTypes.js";

let people = [
  new Person("Bob Smith", "London"),
  new Person("Dora Peters", "New York"),
];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [
  new Employee("Bob Smith", "Sales"),
  new Employee("Alice Jones", "Sales"),
];

class DataCollection<T extends { name: string }, U> {
  private items: T[] = [];

  constructor(intialItems: T[]) {
    this.items.push(...intialItems);
  }

  collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
    let results = [];
    this.items.forEach((item) => {
      let match = targetData.find((d) => d[targetProp] === item[itemProp]);
      if (match !== undefined) {
        results.push({ ...match, ...item });
      }
    });
    return results;
  }
}

let peopleData = new DataCollection<Person, City>(people);
let collatedData = peopleData.collate<City>(cities, "city", "name");
collatedData.forEach((c) =>
  console.log(`${c.name}, ${c.city}, ${c.population}`)
);
let empData = peopleData.collate<Employee>(employees, "name", "name");
empData.forEach((c) => console.log(`${c.name}, ${c.city}, ${c.role}`));
