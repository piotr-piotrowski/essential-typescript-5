import { Cart } from "./cart.js";
import { SPORT, SportsProduct } from "./product.js";
import { sizeFormatter, costFormatter, writeMessage } from "./formatters.js";
import debug from "debug";
import chalk from "chalk";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat = new SportsProduct(2, "Hat", 22.1, SPORT.Running);
let ball = new SportsProduct(3, "Soccer Ball", 19.5, SPORT.Running);

let cart = new Cart("Bot");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", `${cart.totalPrice}`);

let db = debug("Example App");
db.enabled = true;
db("Message: %s", "Test message");

console.log(chalk.greenBright("Formatted message"));
// node_modules/chalk/source/vendor/supports-color/index.d.ts(1,32): error TS2307: Cannot find module 'node:tty' or its corresponding type declarations.
// src/index.ts(24,19): error TS2339: Property 'notAColor' does not exist on type 'ChalkInstance'.
// console.log(chalk.notAColor("Formatted message"));
