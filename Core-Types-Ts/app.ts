/* ----------Union Types------------ */

/* There are cases when we dont know which data will be recieved exctly , so we use union types, 
what union type basically is we pass types to the function and TS infers it from the recieved 
data and appropriatly executes the commands.  */

function combine(input1: number | string, input2: number | string) {
  let result;

  //let result = input1 + input2;// TS complains because it infers that the "+" operater is not allowed
  //work around run-time check
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);
const combineNames = combine("Harshad", " Naik");
console.log(combineNames);
