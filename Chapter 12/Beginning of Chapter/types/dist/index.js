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
class DataCollection {
    items = [];
    constructor(intialItems) {
        this.items.push(...intialItems);
    }
    // src/index.ts(22,56): error TS2693: 'V' only refers to a type, but is being used as a value here.
    // filter<V extends T>(): V[] {
    //    return this.items.filter((item) => item instanceof V) as V[];
    // }
    filter(predicate) {
        return this.items.filter((item) => predicate(item));
    }
    static reverse(items) {
        return items.reverse();
    }
}
let mixedData = new DataCollection([...people, ...products]);
function isProduct(target) {
    return target instanceof Product;
}
let filteredProducts = mixedData.filter(isProduct);
filteredProducts.forEach((p) => console.log(`Product: ${p.name}, ${p.price}`));
let reversedCities = DataCollection.reverse(cities);
reversedCities.forEach((c) => console.log(`City: ${c.name}, ${c.population}`));
