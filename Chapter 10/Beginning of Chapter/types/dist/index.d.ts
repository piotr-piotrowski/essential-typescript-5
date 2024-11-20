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
declare let data: (Person | Employee)[];
