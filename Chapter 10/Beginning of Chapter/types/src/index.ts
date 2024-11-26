interface Person {
  name: string;
  getDetails(): string;
}

interface Product {
  name: string;
  price: number;
}

class Employee implements Person {
  constructor(public name: string, public company: string) {}

  getDetails(): string {
    return `${this.name} works for ${this.company}`;
  }
}

class SportsProduct implements Product {
  constructor(
    public name: string,
    public category: string,
    public price: number
  ) {}
}

let data: (Person | Product)[] = [
  new Employee("Bob Smith", "Acme"),
  new SportsProduct("Running Shoes", "Running", 90.5),
  new Employee("Dora Peters", "BigCo"),
];

data.forEach((item) => {
  if ("getDetails" in item) {
    console.log(`Person: ${item.getDetails()}`);
  } else {
    console.log(`Product: ${item.name}, ${item.price}`);
  }
});
