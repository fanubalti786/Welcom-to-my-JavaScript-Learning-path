// ================================
// 📘 JavaScript Class & Arrow Function Notes
// ================================

// 📌 1. Arrow Function with const (Valid Outside Class)
const sum = (a, b) => a + b;
console.log(sum(5, 3)); // Output: 8

// 📌 2. Class Method Without const (Correct Way)
class Test {
    greet() {
        console.log("Hello");
    }
}
const t = new Test();
t.greet(); // Output: Hello

// 📌 3. Arrow Function Inside Constructor (Without this)
// ❌ This function is only accessible inside constructor
class Demo1 {
    constructor() {
        const greet = () => {
            console.log("Hello from local function");
        };
        greet(); // ✅ Works
    }

    show() {
        // greet(); ❌ Error: greet is not defined
    }
}
const d1 = new Demo1();

// 📌 4. Arrow Function Inside Constructor (With this)
class Demo2 {
