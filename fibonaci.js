function fibonaci(n) {
  let fiberseries = [];
  let a = 0, b = 1;
  
  for(let i = 0; i < n; i++) {
    fiberseries.push(a);
    let next = a + b;
    a = b;
    b = next;
  }

  return fiberseries;
}

let terms = 6;
console.log("fibonaciseries");
console.log(fibonaci(terms));
