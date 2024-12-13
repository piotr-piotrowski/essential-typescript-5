import { Cart } from "./cart.js";
import { SPORT, SportsProduct } from "./product.js";
import { sizeFormatter, costFormatter } from "./formatters.js";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat = new SportsProduct(2, "Hat", 22.1, SPORT.Running);
let ball = new SportsProduct(3, "Soccer Ball", 19.5, SPORT.Running);

let cart = new Cart("Bot");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.itemCount);
// src/index.ts(17,23): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
costFormatter("Cart", `${cart.totalPrice}`);
