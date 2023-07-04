// let i = 0;
function fibonacci(n) {
  // i += 1;
  // if (n < 1) return 0;
  // if (n <= 2) return 1;
  // else {
  //   let x = fibonacci(n - 1) + fibonacci(n - 2);
  //   console.log(`iteration i: ${i}, x: ${x}, n: ${n}`);
  //   return x;
  // }
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

const doFib = (iterations) =>
  new Promise((resolve) => {
    const start = Date.now();
    const result = fibonacci(iterations);
    console.log(`doFib done in: ${Date.now() - start}ms`);
    resolve(result);
  });

const main = async () => {
  const start = Date.now();

  const values = await Promise.all([doFib(40), doFib(40), doFib(40), doFib(40), doFib(40)]);

  console.log("values: ", values);

  console.log(`fib done in ${Date.now() - start}ms`);
};

main().catch(console.error);
