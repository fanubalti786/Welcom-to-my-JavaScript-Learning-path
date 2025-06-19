//🔹 1. Synchronous Callback (Sync ki tarah)
//Agar callback function turant call kiya jata hai bina kisi delay ke, to ye synchronous hota hai.

function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // called immediately
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Ali", sayBye);


// Output:
// Hello Ali
// Goodbye!



// 🔹 2. Asynchronous Callback (Async ki tarah)
// Agar callback kisi asynchronous event (like setTimeout, fetch, ya readFile) ke baad run hota hai, to ye asynchronous hota hai.

// Example:

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback(); // called after delay
  }, 2000);
}

function processData() {
  console.log("Processing data");
}

fetchData(processData);


// Output:

// (2 second pause)
// Data fetched
// Processing data












