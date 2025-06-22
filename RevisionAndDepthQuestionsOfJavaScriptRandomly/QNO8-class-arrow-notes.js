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
    constructor() {
        this.greet = () => {
            console.log("Hello from object method");
        };
    }

    show() {
        this.greet(); // ✅ Works fine
    }
}
const d2 = new Demo2();
d2.show(); // Output: Hello from object method

// 📌 5. Reusable Common Function via Constructor
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;

        // Common reusable function
        this.printHeader = () => {
            console.log("----- Employee Info -----");
        };
    }

    showDetails() {
        this.printHeader();
        console.log(`Name: ${this.name}`);
    }

    showSalary() {
        this.printHeader();
        console.log(`Salary: ${this.salary}`);
    }
}
const emp = new Employee("Irfan", 40000);
emp.showDetails();
emp.showSalary();

// 📌 6. Function Declaration Style Comparison

// a. Local arrow function — only works inside constructor
// const greet = () => { ... } ❌ Not usable in other class methods

// b. this.greet = () => {} ✅ Object property, works everywhere in class

// c. greet() {} ✅ Standard class method — works, but 'this' depends on context

// Summary Table (in comments)
/*
| Type of Function              | Scope                         | Usable in Other Methods | this Binding |
|------------------------------|-------------------------------|--------------------------|--------------|
| const greet = () => {}       | Constructor (local only)      | ❌ No                    | ✅ Yes       |
| this.greet = () => {}        | Object property               | ✅ Yes                   | ✅ Yes       |
| greet() {}                   | Class method                  | ✅ Yes                   | ⚠️ Dynamic   |
*/
