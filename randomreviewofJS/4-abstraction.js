// ✅ Abstract base class
class Vehicle {
  constructor() {
    // 🔹 Enforces abstraction using new.target
    if (new.target === Vehicle) {
      throw new Error("Cannot instantiate abstract class Vehicle directly.");
    }
  }

  // 🔹 Abstract method simulation — child must override
  startEngine() {
    throw new Error("startEngine() must be implemented by the child class.");
  }

  // 🔹 Regular method (can be overridden if needed)
  displayBrand() {
    console.log("Brand: Generic Brand");
  }
}

// ✅ Abstract child class
class Car extends Vehicle {
  constructor() {
    super();
    // 🔹 Prevents instantiating abstract child directly
    if (new.target === Car) {
      throw new Error("Cannot instantiate abstract class Car directly.");
    }
  }

  // 🔹 Not implementing startEngine — still abstract
  // Will throw if used without override in next level
}

// ✅ Final concrete class
class SportsCar extends Car {
  constructor() {
    super();
    // 🔹 Specific properties added in concrete class
    this.brand = "Lamborghini";
    this.model = "Turbo-X";
  }

  // 🔹 Required override — otherwise inherited error from Vehicle
  startEngine() {
    console.log("Starting SportsCar engine: VROOM VROOM!");
  }

  // 🔹 Optional override — customizing parent method
  displayBrand() {
    console.log(`Brand: ${this.brand} | Model: ${this.model}`);
  }
}

// ✅ Usage (Concrete class only)
const car = new SportsCar();
car.displayBrand();    // 🔸 Output: Brand: Lamborghini | Model: Turbo-X
car.startEngine();     // 🔸 Output: Starting SportsCar engine: VROOM VROOM!

// ❌ Try to instantiate abstract classes (will throw errors)
// const vehicle = new Vehicle(); // Error: Cannot instantiate abstract class Vehicle directly.
// const car2 = new Car();        // Error: Cannot instantiate abstract class Car directly.
