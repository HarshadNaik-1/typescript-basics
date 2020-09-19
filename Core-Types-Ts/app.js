/* ----------Union Types------------ */
/* There are cases when we dont know which data will be recieved exctly , so we use union types,
what union type basically is we pass types to the function and TS infers it from the recieved
data and appropriatly executes the commands.  */
function combine(input1, input2) {
    var result;
    //let result = input1 + input2;// TS complains because it infers that the "+" operater is not allowed
    //work around run-time check
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26);
console.log(combineAges);
var combineNames = combine("Harshad", " Naik");
console.log(combineNames);
