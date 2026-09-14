console.log("Hello");//prints new line after printing
process.stdout.write("Hello");//does not print new line after printing
process.stdout.write("bye");// prints bye on the same line as Hello

console.table({name: "Alice", age: 30}); // prints a table with the object properties and values
console.warn("This is a warning!"); // prints a warning message in yellow color
console.error("This is an error!"); // prints an error message in red color
