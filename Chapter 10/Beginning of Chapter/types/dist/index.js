class SportsProduct {
    name;
    category;
    price;
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
class ProductGroup {
    constructor(...initialProducts) {
        initialProducts.forEach((p) => (this[p[0]] = p[1]));
    }
}
let group = new ProductGroup([
    "shoes",
    new SportsProduct("Shoes", "Running", 90.5),
]);
group.hat = new SportsProduct("Hat", "Skiing", 20);
if (group.hat && group.boots) {
    let total = group.hat.price + group.boots.price;
    console.log(`Total: ${total}`);
}
