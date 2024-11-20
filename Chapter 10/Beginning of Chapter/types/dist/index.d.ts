declare class Person {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
}
declare class Employee extends Person {
    readonly id: string;
    name: string;
    private dept;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare class Customer extends Person {
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
}
declare let data: Person[];
