/* ----------Tuples-------------- */

/* In the below example which is similar to that of an array , we add a role, 
If you hover over the role you'll notice that TS infers its type as 
(string | number)[]  which means that TS assumes it has a string or number */

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Harshad",
  age: 24,
  hobbies: ["Sports", "Reading"],
  role: [2, "Author"],
};

// person.role.push("Admin");
// person.role[1] = 10;
// person.role = [];

/* If we try to assign values it works, which is wrong as [1] is a string, to tell TS that the 
role property should only have 2 values we use Tuples 
Tuples are a type in TS not in JavaScript which are used to assigned variables a fixed format or value. */

/* Now if you take a look at the object-arrays.ts file you ll notice that we dont explicitly assign types to
the person object as we let typescript infer the types. but in case of Tuples we have to 
tell TS by defining the types explicitly.  This is called Explicit Assignment of types */

/* As soon as we assign the types, it shows errors at line 20 but notice that it didn't
show error at line 19 where we are pushing something inside the role, TS is not able to infer it as 
push is an exception in Tuples. */
