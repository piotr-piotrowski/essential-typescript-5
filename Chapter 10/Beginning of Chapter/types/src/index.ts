class Person {
  constructor(public id: string, public name: string, public city: string) {}
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
