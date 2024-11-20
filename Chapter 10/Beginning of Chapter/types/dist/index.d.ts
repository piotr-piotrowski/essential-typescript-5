declare abstract class Person {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
    getDetails(): string;
    abstract getSpecificDetails(): string;
}
declare class Employee extends Person {
    readonly id: string;
    name: string;
    private dept;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
    getSpecificDetails(): string;
}
declare class Customer {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
}
declare class Supplier extends Person {
    readonly id: string;
    name: string;
    city: string;
    companyName: String;
    constructor(id: string, name: string, city: string, companyName: String);
    getSpecificDetails(): string;
}
declare let data: (Person | Customer)[];
