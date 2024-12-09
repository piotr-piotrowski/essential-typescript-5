// interface HasGetPrice {
//   getPrice(): number;
// }

export function time<This, Args extends any[], Result extends string | number>(
  method: (This, Args) => Result,
  ctx: ClassMethodDecoratorContext<This, (This, Args) => Result>
) {
  const methodName = String(ctx.name);
  return function (this: This, ...args: Args): Result {
    const start = performance.now();
    console.log(`${methodName} started`);
    const result = method.call(this, ...args);
    const duration = (performance.now() - start).toFixed(2);
    console.log(`${methodName} ended ${duration} ms`);
    return result;
  };
}
