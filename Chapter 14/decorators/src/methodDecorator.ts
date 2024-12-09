type Config = {
  label?: string;
  time?: boolean;
  replacement?: Function;
};

export function time(config?: Config) {
  return function (method, ctx: ClassMethodDecoratorContext) {
    let start;
    ctx.addInitializer(() => (start = performance.now()));
    const methodName = config?.label ?? String(ctx.name);
    return function (this, ...args) {
      const start = performance.now();
      if (config?.time) {
        console.log(`${methodName} started`);
      }
      let result;
      if (config?.replacement) {
        result = config.replacement.call(this, args);
      } else {
        result = method.call(this, args);
      }
      if (config?.time) {
        const duration = (performance.now() - start).toFixed(2);
        console.log(`${methodName} ended ${duration} ms`);
      }
      return result;
    };
  };
}
