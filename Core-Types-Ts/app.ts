/* Objects in Typescript */

const person = /*: { name: string; age: number }*/ {
  name: "Harshad",
  age: 24,
  hobbies: ["Sports", "Reading"],
};
console.log(person.name);
console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map()); !!Error Cannot use map() on string thrown by TS.
}

let favouriteHobbies: string[];
favouriteHobbies = ["Sports"];

/* If your hover over the object person you'll notice that it looks similar to the javascript 
objects we know but if you look closely you'll see that the object has a semicolon(;) after each property,
 & it is not key-value pair but it is key-type pair.*/

/*If you just annotate the person object with (:object) you would just let typescript know that 
 this is just an object and if you try to access the properties of that object typescript will 
 through an error that it doesnt exist. So to use those properties we annotate in the above way. */

/* If you hover over the person's object you'll see that typescript describes hobbies property as follows
 hobbies: string[] it simply means that it an array of data of type string. */
