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
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
    get location() {
        switch (this.city) {
            case "Paris":
                return "France";
            case "London":
                return "UK";
            default:
                return this.city;
        }
    }
    get details() {
        return `${this.name}, ${this.dept}, ${this.location}`;
    }
    #salary_accessor_storage = 100000;
    get salary() { return this.#salary_accessor_storage; }
    set salary(value) { this.#salary_accessor_storage = value; }
}
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
// salesEmployee.id = 'abc'; // src/index.ts(27,15): error TS2540: Cannot assign to 'id' because it is a read-only property.
console.log(`Location: ${salesEmployee.location}`);
console.log(`Details: ${salesEmployee.details}`);
console.log(`Salary: ${salesEmployee.salary}`);
let data = [
    { id: "bsmith", name: "Bob Smith", city: "Lodon" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
    salesEmployee,
];
data.forEach((item) => {
    if (item instanceof Employee) {
        item.writeDept();
    }
    else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
