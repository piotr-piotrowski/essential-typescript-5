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

class DataCollection<T> {
  protected items: T[] = [];

  constructor(intialItems: T[]) {
    this.items.push(...intialItems);
  }

  // src/index.ts(22,56): error TS2693: 'V' only refers to a type, but is being used as a value here.
  // filter<V extends T>(): V[] {
  //    return this.items.filter((item) => item instanceof V) as V[];
  // }

  filter<V extends T>(predicate: (target) => target is V): V[] {
    return this.items.filter((item) => predicate(item)) as V[];
  }
}

let mixedData = new DataCollection<Person | Product>([...people, ...products]);
function isProduct(target): target is Product {
  return target instanceof Product;
}
let filteredProducts = mixedData.filter<Product>(isProduct);
filteredProducts.forEach((p) => console.log(`Product: ${p.name}, ${p.price}`));
