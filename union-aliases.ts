// Union Types: number | string
// literal type: const n1 = 5.3 -> value === type

type Combinable = number | string;
type ConversionDescription = "as-text" | "as-number";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescription // Union Type combined with Literal Type
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  } // runtime type check
  return result;
  //   if (resultConversion === 'as-number') {
  //       return +result;
  //   } else {
  //       return result.toString();
  //   }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
