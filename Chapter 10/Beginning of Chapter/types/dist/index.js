class Employee {
    name;
    company;
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }
    getDetails() {
        return `${this.name} works for ${this.company}`;
    }
}
class SportsProduct {
    name;
    category;
    price;
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
let data = [
    new Employee("Bob Smith", "Acme"),
    new SportsProduct("Running Shoes", "Running", 90.5),
    new Employee("Dora Peters", "BigCo"),
];
data.forEach((item) => {
    if ("getDetails" in item) {
        console.log(`Person: ${item.getDetails()}`);
    }
    else {
        console.log(`Product: ${item.name}, ${item.price}`);
    }
});
