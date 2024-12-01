import { Person, Product, City, Employee } from "./dataTypes.js";

type shapeType = { name: string };

interface Collection<T extends shapeType> {
  add(...newItems: T[]): void;
  get(name: string): T;
  count: number;
}

interface SearchableCollection<T extends shapeType> extends Collection<T> {
  find(name: string): T | undefined;
}

interface ProductCollection extends Collection<Product> {
  sumPrices(): number;
}

interface PeopleCollction<T extends Product | Employee> extends Collection<T> {
  getNames(): string[];
}
