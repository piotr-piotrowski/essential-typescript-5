class Employee {
    id;
    name;
    dept;
    city;
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}
class Customer {
    id;
    name;
    city;
    creditLimit;
    dogName;
    constructor(id, name, city, creditLimit, dogName) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
        this.dogName = dogName;
    }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
    getDogDetails() {
        return `${this.name} has a dog named ${this.dogName}`;
    }
}
let alice = new Customer("ajones", "Alice Jones", "London", 500, "Fido");
let dogOwners = [alice];
dogOwners.forEach((item) => console.log(item.getDogDetails()));
let data = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    alice,
];
data.forEach((item) => {
    console.log(item.getDetails());
});
