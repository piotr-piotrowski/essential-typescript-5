class Person {
    id;
    name;
    city;
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
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
}
let data = [
    new Person("bsmith", "Bob Smith", "Lodon"),
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
];
data.forEach((item) => {
    console.log(`${item.id} ${item.name}, ${item.city}`);
    if (item instanceof Employee) {
        item.writeDept();
    }
});
