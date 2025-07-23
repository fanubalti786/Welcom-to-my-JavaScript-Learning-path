// // ✅ Parent Class with private and public members
// class Parent {
//   #privateVar = "I am private";       // 🔒 Private variable
//   publicVar = "I am public";          // 🌐 Public variable

//   #privateMethod() {                  // 🔒 Private method
//     console.log("This is private method");
//   }

//   publicMethod() {                    // 🌐 Public method
//     console.log("This is public method");
//     console.log(this.#privateVar);    // ✅ Private accessed inside same class
//     this.#privateMethod();            // ✅ Private method used internally
//   }
// }

// // ✅ Child Class inheriting Parent
// class Child extends Parent {
//   accessParentMembers() {
//     console.log(this.publicVar);       // ✅ Access public property — OK

//     // console.log(this.#privateVar);  ❌ Error: Private field not accessible
//     // this.#privateMethod();          ❌ Error: Private method not accessible

//     // ⚠️ You *can* call a public method that internally uses private
//     this.publicMethod();              // ✅ This will work fine
//   }
// }

// const obj1 = new Child();
// obj.accessParentMembers();

// /*
// 🧠 OUTPUT:
// This is public method
// I am private
// This is private method

// 📛 NOTE: Agar tum upar wale do commented lines (#privateVar & #privateMethod)
//          uncomment karoge to ye Syntax Error dega:
//          ❌ "Private field '#privateVar' must be declared in an enclosing class"
// */



// with static new example
// ✅ Parent Class with private, public, and static members
class Parent {
  // 🔒 Private instance variable
  #privateVar = "I am private";

  // 🌐 Public instance variable
  publicVar = "I am public";

  // 🔒 Private instance method
  #privateMethod() {
    console.log("This is private method");
  }

  // 🌐 Public instance method
  publicMethod() {
    console.log("This is public method");
    console.log(this.#privateVar);      // ✅ Accessing private inside same class
    this.#privateMethod();              // ✅ Works fine
  }

  // 🌐 Static variable — belongs to class, NOT instance
  static staticVar = "I am static";

  // 🌐 Static method — cannot access instance properties directly
  static staticMethod() {
    console.log("This is static method");
    console.log(Parent.staticVar);     // ✅ Static can access static
    // console.log(this.publicVar);    ❌ Cannot access instance members
  }

  // ❌ Invalid static access to private — won't work
  // static invalidPrivate() {
  //   console.log(this.#privateVar);  // ❌ Syntax Error
  // }
}

// ✅ Child Class inheriting Parent
class Child extends Parent {
  accessParentMembers() {
    console.log(this.publicVar);        // ✅ Public instance property — OK
    // console.log(this.#privateVar);   ❌ Private variable not accessible
    // this.#privateMethod();           ❌ Private method not accessible

    this.publicMethod();                // ✅ Calls public method which uses private internally
  }

  // ❌ Static method inherited, but private NOT inherited
  tryStaticAccess() {
    // console.log(Parent.staticVar);   ❌ Incorrect: should use Parent.staticVar outside static context
    console.log(Child.staticVar);       // ✅ Accessing static from child class
    Child.staticMethod();               // ✅ Call static method from child class
  }
}

// 👇 Instance of child class
const obj = new Child();
obj.accessParentMembers();

// ✅ Static members are called using class name — NOT instance
console.log(Parent.staticVar);          // ✅ Works
Parent.staticMethod();                  // ✅ Works

// ❌ These will throw errors:
// console.log(obj.staticVar);         ❌ Error: staticVar not accessible from object
// obj.staticMethod();                 ❌ Error: Cannot call static from instance

// ❌ Also, private methods/fields can't be inherited
// obj.#privateVar                     ❌ Syntax Error
