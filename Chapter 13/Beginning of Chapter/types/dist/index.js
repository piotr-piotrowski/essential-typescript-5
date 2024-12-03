import { Product } from "./dataTypes.js";
class Collection {
    items;
    constructor(...initialItems) {
        this.items = initialItems || [];
    }
    total(propName, format) {
        let totalValue = this.items.reduce((t, item) => (t += Number(item[propName])), 0);
        return format ? `$${totalValue.toFixed()}` : totalValue;
    }
}
let data = new Collection(new Product("Kayak", 275), new Product("Lifejacket", 48.95));
let firstVal = data.total("price", true);
console.log(`Formatted value: ${firstVal}`);
let secondVal = data.total("price", false);
console.log(`Unformatted value: ${secondVal}`);
