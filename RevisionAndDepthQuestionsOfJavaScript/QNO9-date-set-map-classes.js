// =====================================================
// 📘 JavaScript Built-in Classes: Date, Set, Map
// =====================================================


/* -----------------------------------------
🔹 1. Date Class – Time & Date Handling
------------------------------------------ */

let now = new Date(); // current date & time
console.log(now);     // Output: 2025-06-21T08:00:00.000Z (example)

let fromString = new Date("2023-12-01");
let fromNumbers = new Date(2023, 11, 1); // months: 0-indexed (0 = Jan, 11 = Dec)

console.log(fromString);   // 2023-12-01T00:00:00.000Z
console.log(fromNumbers);  // 2023-12-01T00:00:00.000Z

// Date Methods
let d = new Date();
console.log(d.getFullYear());    // 2025
console.log(d.getMonth());       // 5 (June, because Jan = 0)
console.log(d.getDate());        // 21
console.log(d.getDay());         // 6 (Saturday, 0 = Sunday)
console.log(d.getHours());       // current hour
console.log(d.toDateString());   // Sat Jun 21 2025
console.log(d.toLocaleString()); // Local format string


/* -----------------------------------------
🔹 2. Set Class – Unique Values Only
------------------------------------------ */

let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate ignored
mySet.add("Hello");
mySet.add({ id: 1 }); // Different object reference

console.log(mySet); // Set(4) { 1, 2, 'Hello', { id: 1 } }

console.log(mySet.has(2));   // true
console.log(mySet.size);     // 4

mySet.delete(2);             // Removes value 2
console.log(mySet.has(2));   // false

mySet.clear();               // Removes all values
console.log(mySet.size);     // 0

// Loop through Set
let s = new Set([10, 20, 30]);
for (let val of s) {
  console.log(val); // 10 20 30
}


/* -----------------------------------------
🔹 3. Map Class – Key-Value Pairs (Any Key Type)
------------------------------------------ */

let myMap = new Map();

myMap.set("name", "Ali");
myMap.set(123, "ID");
myMap.set(true, "Active");

console.log(myMap.get("name"));  // Ali
console.log(myMap.get(true));    // Active
console.log(myMap.size);         // 3

console.log(myMap.has(123));     // true
myMap.delete("name");
console.log(myMap.has("name"));  // false

// Loop through Map
for (let [key, value] of myMap) {
  console.log(key, "=>", value);
}

// Convert Map ↔ Object
let map2 = new Map([["a", 1], ["b", 2]]);
let obj = Object.fromEntries(map2);
console.log(obj); // { a: 1, b: 2 }

let obj2 = { x: 10, y: 20 };
let map3 = new Map(Object.entries(obj2));
console.log(map3); // Map(2) { 'x' => 10, 'y' => 20 }

