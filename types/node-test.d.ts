declare module 'node:test' {
  type TestFn = (t: unknown) => void | Promise<void>;
  interface Test {
    (name: string, fn: TestFn): void;
    (fn: TestFn): void;
  }

  const test: Test;
  export default test;
}

declare module 'node:assert/strict' {
  interface Assert {
    equal(actual: unknown, expected: unknown, message?: string): void;
  }

  const assert: Assert;
  export default assert;
}

declare module '../src/componentes/ui/Botao.js' {
  import Botao from '../src/componentes/ui/Botao';
  export default Botao;
}
