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












