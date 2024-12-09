import { serialize } from "./classDecorator.js";
import { time } from "./methodDecorator.js";

@serialize
export class Product {
  constructor(public name: string, public price: number) {}

  @time
  getDetails(): string {
    return `Name: ${this.name}, Price: $${this.price}`;
  }

  @time
  getPrice(): number {
    return this.price;
  }
}
