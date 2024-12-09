import { log } from "./accessorDecorator.js";
import { autolog } from "./autoAccessorDecorator.js";
import { serialize } from "./classDecorator.js";
import { double } from "./fieldDecorator.js";
import { time } from "./methodDecorator.js";

@serialize
export class Product {
  // @double
  // private taxRate: number = 20;

  constructor(public name: string, public price: number) {}

  @time({
    replacement: () => "Hello, Decorator",
  })
  getDetails(): string {
    return `Name: ${this.name}, Price: $${this.getPrice()}`;
  }

  @time({
    label: "Product.getPrice",
    time: true,
  })
  getPrice(): number {
    return this.price * (1 + this.tax / 100);
  }

  // @log
  // get tax() {
  //   return this.taxRate;
  // }

  // @log
  // set tax(newValue) {
  //   this.taxRate = newValue;
  // }

  @autolog
  accessor tax: number = 20;
}
