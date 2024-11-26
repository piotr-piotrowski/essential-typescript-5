interface Person {
  name: string;
  getDetails(): string;

  dogName?: string;
  getDogDetails?(): string;
}

class Employee implements Person {
  constructor(
    public readonly id: string,
    public name: string,
    private dept: string,
    public city: string
  ) {}

  getDetails() {
    return `${this.name} works in ${this.dept}`;
  }
}

class Customer implements Person {
  constructor(
    public readonly id: string,
    public name: string,
    public city: string,
    public creditLimit: number,
    public dogName
  ) {}

  getDetails(): string {
    return `${this.name} has ${this.creditLimit} limit`;
  }

  getDogDetails(): string {
    return `${this.name} has a dog named ${this.dogName}`;
  }
}

let alice = new Customer("ajones", "Alice Jones", "London", 500, "Fido");

let data: Person[] = [
  new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
  alice,
];

data.forEach((item) => {
  console.log(item.getDetails());
  if (item.getDogDetails) {
    console.log(item.getDogDetails());
  }
});
