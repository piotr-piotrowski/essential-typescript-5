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
    set location(newCity) {
        this.city = newCity;
    }
}
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
// salesEmployee.id = 'abc'; // src/index.ts(27,15): error TS2540: Cannot assign to 'id' because it is a read-only property.
console.log(`Location: ${salesEmployee.location}`);
salesEmployee.location = "London";
console.log(`Location: ${salesEmployee.location}`);
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
