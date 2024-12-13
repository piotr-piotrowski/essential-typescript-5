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
// writeMessage(`The ${thing} costs $${cost.toFixed(2)}`, true);
//   TypeError: cost.toFixed is not a function
costFormatter("Cart", `${cart.totalPrice}`);
