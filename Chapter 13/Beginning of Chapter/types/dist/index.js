let p1 = { name: "Kayak" };
let p2 = { name: "Kayak" };
let p3 = { name: "Kayak" };
console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type (Pick): ${p2.name}`);
console.log(`Built-in mapped type (Omit): ${p3.name}`);
export {};
