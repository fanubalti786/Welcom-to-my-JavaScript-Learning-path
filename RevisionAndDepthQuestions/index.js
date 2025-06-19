// QNo1: Create a funciton that takes array of objects as input and return the users 
// whose age>18 and are male

// Solution with filter array:
let voter;
let info = [
    { Name: "irfan", age: 24, gender: "male" },
    { Name: "mumtaz", age: 15, gender: "male" },
    { Name: "sohail", age: 20, gender: "female" },
    { Name: "liaqat", age: 32, gender: "male" }
];

function canvote(info){
    voter = info
            .filter(item => item.age > 18 && item.gender === "male").length
            // .map(item => item.Name).length;
        
    return voter;
}

const solve = (info) => {
    let arr = [];
    for(let i=0; i<info.length; i++)
    {
        if(info[i].age > 18 && info[i].gender === "male")
        {
            arr.push(info[0]);
        }
    }

    // arr.map(item => arr.Name);
    return arr;
}

console.log(canvote(info));
console.log(solve(info));



// QNo2: Sync vs async 

const fs = require("fs")

// readFileSync is synchronous – it blocks execution until the file is fully read.
// So console.log runs after and prints the correct content.
const content1 = fs.readFileSync("file1.txt", "utf-8");
console.log(content1);

// readFile is asynchronous – it doesn't wait for the file to load.
// So console.log runs before the file is ready, resulting in undefined or unexpected output.

// const content = fs.readFile("file1.txt", "utf-8");
// console.log(content); // Incorrect output


// Asynchronously reads the file. The callback runs only after the file is fully read.
// This prevents blocking the program while the file is loading.
fs.readFile("file1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error:", err); // Logs any error that occurs during reading
  } else {
    console.log("File Content:", data); // Logs the content once the file is read
  }
});



// Functional arguments
// Passing a function to another function


function sum (a,b)
{
  return a + b;
}
function doOperation(a,b,op) 
{
  return op(a,b);
}

const total = doOperation(1, 2, sum);
console.log(total);



// Example demonstrating sync vs async behavior with I/O-bound and CPU-bound tasks

console.log("HI");


// I/O-bound async task (setTimeout schedules this function to run after 1.5 seconds)
function timeout()
{
  console.log("click the button!");
}

setTimeout(timeout,1500);

let c = 0;

for(i=0; i<20; i++)
{
  c++;
}

console.log(c);


// what's the output
/*
  option1
  Hi
  click the button
  vlue of c 20


  option2 
  Hi
  value of c 20
  click the button


  Explanation:
console.log("HI") and the for-loop run immediately (synchronous, CPU-bound).
setTimeout` schedules `timeout()` to run after 1.5 seconds.
Since the event loop waits for the call stack to clear, the async callback (`timeout()`) is executed after all synchronous code is done.
*/





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




// Agar setTimeout(..., 0) 
// lagao, to kya callback synchronous chalega? Nahi, phir bhi asynchronous hi chalega. 👇



// 🔍 setTimeout(fn, 0) ka matlab kya hai?
// Even though tumne 0ms delay diya hai, JavaScript callback ko turant execute nahi karta.
// Usse event queue me daal diya jata hai, aur vo call stack empty hone ke baad hi execute hota hai.

// 🧠 Example:

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

console.log("End");


/*
Output:
Start
End
Inside setTimeout
*/


/*
💡 Explanation:
console.log("Start") — run hota hai

setTimeout(..., 0) — callback event queue me chala gaya

console.log("End") — call stack khatam hua

Tab jaake callback run hota hai
*/



/*
Q:
Agar hum setTimeout ko loop ke andar lagate hain, to wo asynchronous behavior dikhata hai — 
aur isme aksar beginners confuse ho jate hain.

*/

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

/*
Output:
4
4
4

❓ Aisa kyun hua?
Kyunki setTimeout asynchronous hai, to loop pehle completely execute ho jata hai, aur uske baad sabhi setTimeout callbacks run hote hain.

Jab setTimeout callbacks chalte hain, tab i = 4 ho chuka hota hai.

Sabhi callbacks same reference (i) ko use karte hain.
*/




// ✅ Solution: (Using let instead of var)
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Output:
/**
1
2
3

Why?
Because let block-scoped hai — har iteration me i ki nayi copy banti hai.
*/



// ✅ OR: Use IIFE (Immediately Invoked Function Expression)
for (var i = 1; i <= 3; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}

// ✔️ Ye bhi same correct output dega: 1, 2, 3



























