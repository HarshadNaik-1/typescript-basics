/*------------Enum------------- */
enum Role {
  ADMIN,
  USER,
  AUTHOR,
} //Global assignment

// console.log(Role[1]);
const person = {
  name: "Harshad",
  age: 24,
  hobbies: ["Sports", "Reading"],
  role: Role.USER,
};
console.log(person.role);
/* Enum or Enumerator are losely related to tuples, suppose in our program we want to assign 
roles admin =0,user=1,author=2 if we just assign role = 0/1/2 we can mistakely add 4 but it wont
have a role assigned. So we use enum type, which is defined as above , if you hover over it you'll
see that each role is assigned an ID which gets passed when we enter the role admin, user, author.  */

/*------------Any------------- */

let Human: any; //any[] means it has to be type array with data being string or number or any.
Human = ["Man"];

/*The most flexible of all types we tell typescript that the following 
variable accepts any value. Avoid using Any type as it removes the purpose of TS*/
