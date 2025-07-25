class Person {
  constructor(name) {
    this.name = name; // ✅ visible
    this.age = 25;    // ✅ visible

    // ✅ function inside constructor (visible)
    this.sayHi = function () {
      console.log(`Hi, I'm ${this.name}`);
    };
  }

  // ❌ function outside constructor (not visible in log)
  greet() {
    console.log(`Hello from ${this.name}`);
  }
}

const p1 = new Person("Ali");

console.log("🔍 Console Output:");
console.log(p1);

console.log("\n✅ Call sayHi (constructor function):");
p1.sayHi();

console.log("\n✅ Call greet (prototype method):");
p1.greet();
