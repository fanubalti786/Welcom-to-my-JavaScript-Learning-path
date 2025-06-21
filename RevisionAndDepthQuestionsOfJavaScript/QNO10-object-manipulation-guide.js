// =============================================
// 📘 JavaScript Objects — Master Notes
// =============================================


/* ------------------------------------------
🔹 1. Object Creation (Literal & Constructor)
------------------------------------------- */

// ✅ Literal
const user = {
  name: "Irfan",
  age: 24,
  city: "Lahore"
};

// ✅ Constructor way
const person = new Object();
person.name = "Ali";
person.age = 30;


/* ------------------------------------------
🔹 2. Accessing Properties
------------------------------------------- */
console.log(user.name);       // Irfan
console.log(user["city"]);   // Lahore

let key = "age";
console.log(user[key]);       // 24


/* ------------------------------------------
🔹 3. Add / Update Properties
------------------------------------------- */
user.country = "Pakistan";   // Add
user.city = "Karachi";       // Update
console.log(user);


/* ------------------------------------------
🔹 4. Delete Property
------------------------------------------- */
delete user.age;
console.log(user); // { name: 'Irfan', city: 'Karachi', country: 'Pakistan' }


/* ------------------------------------------
🔹 5. Check if Property Exists
------------------------------------------- */
console.log("name" in user);         // true
console.log(user.hasOwnProperty("age")); // false


/* ------------------------------------------
🔹 6. Looping through Object
------------------------------------------- */
for (let key in user) {
  console.log(key, ":", user[key]);
}


/* ------------------------------------------
🔹 7. Object.keys / values / entries
------------------------------------------- */
console.log(Object.keys(user));     // ['name', 'city', 'country']
console.log(Object.values(user));   // ['Irfan', 'Karachi', 'Pakistan']
console.log(Object.entries(user));  // [['name', 'Irfan'], ['city', 'Karachi'], ...]


/* ------------------------------------------
🔹 8. Destructuring
------------------------------------------- */
const employee = {
  id: 101,
  name: "Usman",
  dept: "Sales"
};

const { id, name } = employee;
console.log(id);   // 101
console.log(name); // Usman


/* ------------------------------------------
🔹 9. Nested Object Access
------------------------------------------- */
const student = {
  name: "Sara",
  marks: {
    math: 90,
    english: 85
  }
};

console.log(student.marks.math); // 90


/* ------------------------------------------
🔹 10. Optional Chaining (?.)
------------------------------------------- */
console.log(student.marks?.science); // undefined (no error)


/* ------------------------------------------
🔹 11. Dynamic Keys (Real Project Use)
------------------------------------------- */
let keyName = "status";
const obj = {
  [keyName]: "active"
};
console.log(obj.status); // active


/* ------------------------------------------
🔹 12. Merge Two Objects
------------------------------------------- */
const a = { x: 1, y: 2 };
const b = { y: 99, z: 3 };

const merged = { ...a, ...b };
console.log(merged); // { x: 1, y: 99, z: 3 } — b overwrites a


/* ------------------------------------------
🔹 13. Clone Object (Deep vs Shallow)
------------------------------------------- */

// ✅ Shallow Copy
const original = { lang: "JS", version: "ES6" };
const copy = { ...original };
copy.lang = "TS";
console.log(original.lang); // JS

// ❌ Deep copy needed for nested objects
const deepObj = {
  info: {
    name: "Ali"
  }
};

const shallow = { ...deepObj };
shallow.info.name = "Zain";
console.log(deepObj.info.name); // Zain ❌


// ✅ Deep Clone using JSON
const deepClone = JSON.parse(JSON.stringify(deepObj));
deepClone.info.name = "Hamza";
console.log(deepObj.info.name); // Zain ✅


/* ------------------------------------------
🔹 14. Object.freeze() (Immutable object)
------------------------------------------- */
const config = {
  mode: "dark"
};

Object.freeze(config);
config.mode = "light"; // Ignored
console.log(config.mode); // dark


/* ------------------------------------------
🔹 15. Object.seal() (Can update, not add/delete)
------------------------------------------- */
const sealed = {
  title: "JS"
};

Object.seal(sealed);
sealed.title = "React";   // ✅ allowed
sealed.version = "18";    // ❌ ignored
delete sealed.title;      // ❌ ignored
console.log(sealed);


/* ------------------------------------------
🔹 16. Convert Object ↔ Array
------------------------------------------- */
let myObj = { a: 10, b: 20 };
let arrFromObj = Object.entries(myObj);  // [['a', 10], ['b', 20]]

let objFromArr = Object.fromEntries(arrFromObj); // { a: 10, b: 20 }
console.log(objFromArr);


/* ------------------------------------------
🔹 17. Real World: Count Frequency in Array
------------------------------------------- */
const letters = ["a", "b", "a", "c", "a", "b"];

const freq = {};
for (let char of letters) {
  freq[char] = (freq[char] || 0) + 1;
}
console.log(freq); // { a: 3, b: 2, c: 1 }

