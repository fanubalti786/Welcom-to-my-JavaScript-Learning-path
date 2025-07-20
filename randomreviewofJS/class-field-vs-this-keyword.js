class Car {
  brand = "Toyota";   // ✅ Class field
  color;              // ✅ Declared class field

  constructor(modelName, carColor) {
    this.model = modelName;    // ✅ Correct use of this
    this.color = carColor;     // ✅ Assign to declared field
    this.style = carColor;     // ✅ Assign new property
  }

  model = "irfan";   // ⚠️ Will be overridden by constructor

  // this.model = "irfan";  ❌ Invalid here (can't use this outside methods/constructor)

  // style = color;         ❌ color is undefined here (not in scope)

  start() {
    const sound = "Vroom";    // ✅ Local var
    console.log(`${this.model} started with color ${this.color}`);  // ✅ Use this to access class fields
  }
}

const myCar = new Car("Fortuner", "Black");
myCar.start();        // ✅ Works fine
console.log(myCar);   // ✅ Check full object