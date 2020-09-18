/*-------------Without TypeScript---------------*/
/*function add(n1, n2) {
  return n1 + n2;
}

const number1 = "5";
const number2 = 2.8;

const result = add(number1, number2);
console.log(result); */
//52.8 because 5 is a string so JS considers the next input to also be a string and concats them.

/*-------------With TypeScript---------------*/
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + n1 + n2);
  } else {
    return n1 + n2;
  }
}
/* We assign parameter with types above in the function & not here below where we declare a 
variable because typescript is able to understand/infer/assumes that the value which is going to
be assigned to this variable is of type number that is also called as "type inferance". */

const number1 = 6; //5
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

//Spits out error that number1 is not assigned a number.
