class Person {
    id;
    name;
    city;
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    getDetails() {
        return `${this.name}, ${this.getSpecificDetails()}`;
    }
}
class Employee extends Person {
    id;
    name;
    dept;
    constructor(id, name, dept, city) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
    getSpecificDetails() {
        return `works in ${this.dept}`;
    }
}
class Customer {
    id;
    name;
    city;
    creditLimit;
    constructor(id, name, city, creditLimit) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
}
class Supplier extends Person {
    id;
    name;
    city;
    companyName;
    constructor(id, name, city, companyName) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.companyName = companyName;
    }
    getSpecificDetails() {
        return `works for ${this.companyName}`;
    }
}
let data = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    new Customer("ajones", "Alice Jones", "London", 500),
];
data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));
data.forEach((item) => {
    if (item instanceof Person) {
        console.log(item.getDetails());
    }
    else {
        console.log(`Customer: ${item.name}`);
    }
});
