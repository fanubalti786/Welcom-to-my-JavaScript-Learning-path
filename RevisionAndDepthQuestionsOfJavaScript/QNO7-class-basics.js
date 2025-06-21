// 📘 2. Constructor ke andar parameter ko use karna
class Person {
  constructor(name) {
    console.log(name); // Direct use allowed
  }
}

/*Ye name har object ke paas hoga (instance variable).

Access: p1.name ya this.name (agar class ke andar ho). */





// 📘 2. Constructor ke andar parameter ko use karna javascript Copy Edit
class Person {
  constructor(name) {
    console.log(name); // Direct use allowed
  }
}


/*name sirf constructor ke andar hi accessible hota hai.

Agar bahar chahiye, to this.name = name karna padega. */


// 📘 3. this.name ki zarurat kab hoti hai?
class Person {
  name = "Ali";

  constructor() {
    console.log(this.name); // ✅ Required inside class
  }
}

/*this.name ka matlab: current object ka variable.

Bina this ke error aata hai (name is not defined). */



// 📘 4. Direct console.log(name) class ke andar likhna?
class Person {
  name = "Ali";
//   console.log(name); // ❌ Error: Not allowed directly
}

/*Class ke andar direct console.log likhna allowed nahi.

Console log sirf constructor ya method ke andar chalega. */


// 📘 5. Constructor ke bina object kaam karega?

class Person {
  name = "Ali";
}

let p = new Person();
console.log(p.name); // ✅ Works without constructor

/*Constructor optional hota hai jab field se kaam chal jaye. */


// 📘 6. Static Variable
class Person {
  static count = 0;

  constructor() {
    Person.count++;
  }
}
console.log(Person.count); // ✅ Static variable access via class

/*static variable class ka hota hai, sab objects ke liye shared.

Access: ClassName.variableName (e.g., Person.count) */



// 📘 7. Static Block
class Person {
  static {
    console.log("Static block runs once");
  }
}


/*Yeh block class ke load hote hi ek baar chalta hai.

Initialization ya debugging ke liye useful hota hai. */





// 📘 8. Method vs Field javascript Copy Editd
class Person {
  name = "Ali";      // Field
  sayHi() {          // Method
    console.log("Hi " + this.name);
  }
}

// Field = data / variable

// Method = function jo kaam karta hai



// 📘 9. Static Method
class MathUtil {
  static double(x) {
    return x * 2;
  }
}
console.log(MathUtil.double(4)); // Output: 8


/*
    Static method ko object se nahi, class se call karte hain.
 */


