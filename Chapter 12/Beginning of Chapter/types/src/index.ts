import { Person, Product, City } from "./dataTypes.js";

let people = [
  new Person("Bob Smith", "London"),
  new Person("Dora Peters", "New York"),
];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];

class DataCollection<T extends { name: string }, U> {
  private items: T[] = [];

  constructor(intialItems: T[]) {
    this.items.push(...intialItems);
  }

  collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
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
let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach((c) =>
  console.log(`${c.name}, ${c.city}, ${c.population}`)
);
