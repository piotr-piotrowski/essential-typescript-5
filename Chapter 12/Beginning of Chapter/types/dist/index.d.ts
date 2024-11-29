import { Person, City, Employee } from "./dataTypes.js";
declare class DataCollection<T extends {
    name: string;
}> {
    private items;
    constructor(intialItems: T[]);
    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[];
}
export declare let peopleData: DataCollection<Person>;
export declare let collatedData: (Person & City)[];
export declare let empData: (Person & Employee)[];
export {};
