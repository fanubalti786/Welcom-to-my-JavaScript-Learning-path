// ✅ JavaScript Arrays – Full Advanced Notes

// ✅ 1. Array Creation (basic to advanced)
let a1 = [1, 2, 3]; // literal
let a2 = new Array(3); // [ <3 empty items> ]
let a3 = new Array(3).fill(0); // [0, 0, 0]
let a4 = Array.of(1, 2, 3); // [1, 2, 3]

// ✅ 2. Access Elements
let a = ['x', 'y', 'z'];
console.log(a[1]);      // 'y'
console.log(a.at(-1));  // 'z' (last element)

// ✅ 3. Update Elements
let b = [10, 20, 30];
b[1] = 99; // update index 1
console.log(b); // [10, 99, 30]

// ✅ 4. Insert/Delete/Replace using splice()
let c = [1, 2, 3, 4];
c.splice(2, 0, 99); // insert 99 at index 2
c.splice(1, 1);      // delete 1 item at index 1
c.splice(1, 1, 100); // replace 1 item at index 1

// ✅ 5. slice() – copy portion
let d = [10, 20, 30, 40];
let sliced = d.slice(1, 3); // [20, 30] (non-destructive)

// ✅ 6. fill() – fill parts of array
let e = Array(5).fill('a');
e.fill('z', 1, 3); // fill index 1 & 2

// ✅ 7. in & hasOwnProperty (sparse array check)
let arr = [];
arr[100] = "Hi";
console.log(50 in arr);               // false (empty slot)
console.log(arr.hasOwnProperty(100)); // true

// ✅ 8. Looping Arrays
for (let i = 0; i < arr.length; i++) {}
for (let val of arr) {}
for (let key in arr) {}
arr.forEach((val, i) => {});

// ✅ 9. Convert: join() & split()
let skills = ["HTML", "CSS", "JS"];
let joined = skills.join(" - ");
let str = "React,Vue,Angular";
let techs = str.split(",");

// ✅ 10. reduce() – sum & max
let nums = [10, 20, 30];
let sum = nums.reduce((acc, curr) => { return acc + curr; }, 0);
let max = nums.reduce((a, b) => { return a > b ? a : b; });

// ✅ 11. find(), findIndex(), filter()
let found = nums.find(x => x > 15);         // 20
let index = nums.findIndex(x => x === 20);  // 1
let filtered = nums.filter(x => x > 10);    // [20, 30]

// ✅ 12. map(), some(), every()
let discounted = nums.map(p => p * 0.9);
let hasBig = nums.some(p => p > 25);  // true
let allAbove5 = nums.every(p => p > 5); // true

// ✅ 13. flat(), concat(), spread
let nested = [1, [2, [3]]];
let flat = nested.flat(2); // [1, 2, 3]
let merged = [...[1, 2], ...[3, 4]];  // [1, 2, 3, 4]

// ✅ 14. sort() & reverse()
let unsorted = [40, 5, 100, 1];
unsorted.sort((a, b) => a - b); // [1, 5, 40, 100]
unsorted.reverse();             // [100, 40, 5, 1]

// ✅ 15. clone arrays (shallow)
let original = [1, 2, 3];
let copy1 = original.slice();
let copy2 = [...original];

// ✅ 16. isArray() check
console.log(Array.isArray([1,2])); // true
console.log(Array.isArray({}));    // false

// ✅ 17. Multidimensional Array Access
let matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][0]); // 3

// ✅ 18. Destructuring & Spread
let [x, y] = [10, 20]; // x=10, y=20
let mergedArr = [...[1, 2], 3];

// ✅ 19. Practice Safe reduce on empty arrays
let empty = [].reduce((a, b) => a + b, 0); // ✅ Safe with initialValue

// ✅ 20. ASCII concept (example: fill)
// fill('z', 1, 3)
// Index:  0   1   2   3
// Value:  a   z   z   a

// ✅ Bonus: real-world use cases
// - Convert CSV string to array → split()
// - Clean string array → map + trim
// - Grouping → reduce
// - Pagination → slice
// - Remove duplicates → new Set(array)

