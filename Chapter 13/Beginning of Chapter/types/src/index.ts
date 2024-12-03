type resultType<T extends boolean> = T extends true ? string : number;

let firstVal: resultType<true> = "String Value";
let secondVal: resultType<false> = 100;

// src/index.ts(6,5): error TS2322: Type 'string' is not assignable to type 'number'.
//let mismatchCheck: resultType<false> = "String Value";
