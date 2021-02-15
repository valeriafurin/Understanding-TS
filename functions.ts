function add(number1: number, number2: number) {
  return number1 + number2;
}
// type inferrence: when ts "knows" what type the result would be

function printResult(num: number): void {
  // doesnt return anything, thats why void
  console.log("Result is: " + num);
}

// void tells us, that anything that might be returend will not be used
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
// can add a function inside a function. Therefore the cb -> callback

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // function type

combineValues = add;

console.log(combineValues(2, 18));

addAndHandle(8, 10, (result) => {
  console.log(result);
});
// inside of function, we now the type of the return, since we described it beforehand in callback