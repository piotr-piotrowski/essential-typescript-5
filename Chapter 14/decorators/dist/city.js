export class City {
    name;
    population;
    constructor(name, population) {
        this.name = name;
        this.population = population;
    }
    // @message("First Decorator")
    // @message("Second Decorator")
    getSummary() {
        return `Name: ${this.name}, Population: ${this.population}`;
    }
}
