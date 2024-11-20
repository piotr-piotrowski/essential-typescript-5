abstract class Person {
  constructor(public id: string, public name: string, public city: string) {}

  getDetails(): string {
    return `${this.name}, ${this.getSpecificDetails()}`;
  }

  abstract getSpecificDetails(): string;
}

class Employee extends Person {
  constructor(
    public readonly id: string,
    public name: string,
    private dept: string,
    city: string
  ) {
    super(id, name, city);
  }

  writeDept() {
    console.log(`${this.name} works in ${this.dept}`);
  }

  getSpecificDetails() {
    return `works in ${this.dept}`;
  }
}

class Customer extends Person {
  constructor(
    public readonly id: string,
    public name: string,
    public city: string,
    public creditLimit: number
  ) {
    super(id, name, city);
  }

  getSpecificDetails() {
    return `has ${this.creditLimit} limit`;
  }
}

class Supplier extends Person {
  constructor(
    public readonly id: string,
    public name: string,
    public city: string,
    public companyName: String
  ) {
    super(id, name, city);
  }

  getSpecificDetails() {
    return `works for ${this.companyName}`;
  }
}

let data: Person[] = [
  new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
  new Customer("ajones", "Alice Jones", "London", 500),
];

data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));

data.forEach((item) => console.log(item.getDetails()));
