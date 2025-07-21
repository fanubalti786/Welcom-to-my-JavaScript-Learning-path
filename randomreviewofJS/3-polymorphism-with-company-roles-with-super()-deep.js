// Base Class
class Person {
    constructor() {
        console.log("Person created");
    }

    eat() {
        console.log("Person is eating");
    }

    sleep() {
        console.log("Person is sleeping");
    }
}

// Subclass
class Engineer extends Person {
    constructor(specialization) {
        super();
        console.log("Engineer created with specialization:", specialization);
        this.specialization = specialization;
    }

    writeCode() {
        console.log("Engineer is writing code");
    }

    sleep() {
        console.log("Engineer is working late, sleeping less 😅");
    }
}

// Subclass of Engineer
class MedicalEngineer extends Engineer {
    constructor(field) {
        super("Medical Software");
        console.log("Medical Engineer specialized in:", field);
        this.field = field;
    }

    diagnoseSystem() {
        console.log("Medical Engineer is diagnosing hospital equipment");
    }

    eat() {
        console.log("Medical Engineer is eating in lab");
    }

    work() {
        console.log("Medical Engineer is working on med-tech project");
    }
}

// Subclass of MedicalEngineer
class RescuePilot extends MedicalEngineer {
    constructor() {
        console.log("Rescue Pilot created");
        super("Cardiac Monitoring Systems");
    }

    flyHelicopter() {
        console.log("Rescue Pilot is flying a medical helicopter");
    }

    diagnoseSystem() {
        console.log("Rescue Pilot is diagnosing mid-air system");
    }
}

// ✅ Object creation
const employee = new RescuePilot();

// ✅ Method calls
employee.work();           // Medical Engineer's work
employee.flyHelicopter();  // Pilot-specific
employee.eat();            // Overridden by MedicalEngineer
employee.diagnoseSystem(); // Pilot's override
employee.writeCode();      // From Engineer
employee.sleep();          // Engineer's overridden method

console.log(employee);     // Object structure
