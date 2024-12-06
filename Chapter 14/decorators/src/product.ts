import { time } from "./methodDecorator.js";

export class Product {
  constructor(public name: string, public price: number) {}

  @time
  getDetails(): string {
    return `Name: ${this.name}, Price: $${this.price}`;
  }

  // src/product.ts(11,4): error TS1270: Decorator function return type '() => string' is not assignable to type 'void | (() => number)'.
  //   Type '() => string' is not assignable to type '() => number'.
  //   Type 'string' is not assignable to type 'number'.
//   @time
//   getPrice(): number {
//     return this.price;
//   }
}
