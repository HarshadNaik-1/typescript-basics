// With TypeScript
const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// (!) tells typescript that element wont yield null.
// HTMLInputElement = Type casting

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
  //input.value returns value in string always. Hence add + before the argument.
});
