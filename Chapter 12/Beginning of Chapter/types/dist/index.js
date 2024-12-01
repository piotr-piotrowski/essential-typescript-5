import { Person } from "./dataTypes.js";
class ArrayCollection {
    items = [];
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        return this.items.find((item) => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
let peopleCollection = new ArrayCollection();
peopleCollection.add(new Person("Bob Smith", "London"), new Person("Dora Peters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);
