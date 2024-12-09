var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import { autolog } from "./autoAccessorDecorator.js";
import { serialize } from "./classDecorator.js";
import { time } from "./methodDecorator.js";
let Product = (() => {
    let _classDecorators = [serialize];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getDetails_decorators;
    let _getPrice_decorators;
    let _tax_decorators;
    let _tax_initializers = [];
    let _tax_extraInitializers = [];
    var Product = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _getDetails_decorators = [time({
                    // replacement: () => "Hello, Decorator",
                    time: true,
                })];
            _getPrice_decorators = [time({
                    label: "Product.getPrice",
                    time: true,
                })];
            _tax_decorators = [autolog];
            __esDecorate(this, null, _getDetails_decorators, { kind: "method", name: "getDetails", static: false, private: false, access: { has: obj => "getDetails" in obj, get: obj => obj.getDetails }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getPrice_decorators, { kind: "method", name: "getPrice", static: false, private: false, access: { has: obj => "getPrice" in obj, get: obj => obj.getPrice }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _tax_decorators, { kind: "accessor", name: "tax", static: false, private: false, access: { has: obj => "tax" in obj, get: obj => obj.tax, set: (obj, value) => { obj.tax = value; } }, metadata: _metadata }, _tax_initializers, _tax_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Product = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name = __runInitializers(this, _instanceExtraInitializers);
        price;
        // @double
        // private taxRate: number = 20;
        constructor(name, price) {
            __runInitializers(this, _tax_extraInitializers);
            this.name = name;
            this.price = price;
        }
        getDetails() {
            return `Name: ${this.name}, Price: $${this.getPrice()}`;
        }
        getPrice() {
            return this.price * (1 + this.tax / 100);
        }
        #tax_accessor_storage = __runInitializers(this, _tax_initializers, 20);
        // @log
        // get tax() {
        //   return this.taxRate;
        // }
        // @log
        // set tax(newValue) {
        //   this.taxRate = newValue;
        // }
        get tax() { return this.#tax_accessor_storage; }
        set tax(value) { this.#tax_accessor_storage = value; }
    };
    return Product = _classThis;
})();
export { Product };
