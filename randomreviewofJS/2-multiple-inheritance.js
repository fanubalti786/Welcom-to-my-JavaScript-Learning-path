// ✅ Base Class
class person1 {
    constructor() {
        console.log("person");
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

// ✅ Inherits from person1
class engineer1 extends person1 {
    constructor(val) {
        super(); // 🔗 Calls person1's constructor
        console.log("engineer");
    }

    work() {
        console.log("engineer work");
    }

    software() {
        console.log("engineer");
    }
}

// ✅ Inherits from engineer1 (No override now)
class doctore1 extends engineer1 {
    constructor(val) {
        super(val); // 🔗 Calls engineer1's constructor
        console.log("doctore");
    }

    doctorWork() {
        console.log("doctore work");
    }

    patient() {
        console.log("doctore");
    }
}

// ✅ Inherits from doctore1
class pilote1 extends doctore1 {
    constructor(val) {
        console.log("pilote");
        super(val); // 🔗 Calls doctore1's constructor → engineer1 → person1
    }

    aeroplane() {
        console.log("pilote");
    }
}

// ✅ Create object of the last subclass
let irfan2 = new pilote1(55);

// 🧪 Method Calls — No overriding involved
irfan2.work();         // ✅ From engineer1
irfan2.aeroplane();    // ✅ From pilote1
irfan2.eat();          // ✅ From person1
irfan2.patient();      // ✅ From doctore1
irfan2.software();     // ✅ From engineer1
irfan2.doctorWork();   // ✅ Now unique method name (no override)
