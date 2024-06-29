// Classes & Objects

// 1.Objects in JS
// A javaScript object is an entity having state and behavior (properties and method).
// JS objects hava special property called prototype.
// we can set prototype using __proto__
// * if object & prototype have same method, objects method will be uses.


const student = {
    fullName : "irfan haider",
    marks : 88,
    printMarks : function(value) 
    {
        console.log("marks", this.marks);
        return value;
    },

    printMarks1 : () =>
    {
        console.log("marks", this.marks);
    },

    printMarks2() 
    {
        console.log("marks", this.marks);
    },
}


console.log(student);// its a output of object and this output create's a new object which
// is called prototype and inwhich many other methods are already exist and we can easily
// access these methods without creating any function or method for example
console.log(student.fullName);
console.log(student.marks);
console.log(student.printMarks);// its a simple variable and its give us only body code
student.printMarks(); // only give us output no return value
console.log(student.printMarks(55)); // return value
console.log(student.toString);// its a example of object prototype default values
console.log(student.printMarks1);
console.log(student.printMarks1());
console.log(student.printMarks2);
console.log(student.printMarks2());

let arr = ["irfan", "mumtaz", "sohail"];

console.log(arr); // array also give us prototype object and we can use its default methods
// Example in previous lectures push(), pop(), shift(), unshift(), slice(), spllice()
// concat(), length, typeof etc;


// User define prototype
// this type of prototype means we can create our own prototypes by itself 
// Example 


const employee = {
    calCulateTax() {
        console.log("Tax is 10 percent");
    },

    age : 50,
}

const irfan = {
    salary : 399999,
    calCulateTax(){
        console.log("Tax is 20 percent");// same function but execute this one function
        // bc priority of this fuction is high
    }
}

const sohail = {
    salary : 399999,
}

const mumtaz = {
    salary : 399999,
}

irfan.__proto__ = employee;
sohail.__proto__ = employee;
mumtaz.__proto__ = employee;
console.log(irfan.calCulateTax(), irfan.age);// override function
console.log(sohail.calCulateTax());
console.log(mumtaz.calCulateTax());



//Classes in JS
// class is a programe-code template for creating objects.
// those objects will have some state(variables) & some behaviour (functions) inside it.

class toyotaCar {
    model = 2022;
    start()
    {
        console.log("start");
    }

    stop()
    {
        console.log("stop");
    }

    setBrand(brand)
    {
        this.brand = brand;
        console.log(this.brand);
    }

}



let fortuner = new toyotaCar();
let lexus = new toyotaCar();
console.log(fortuner);
console.log(fortuner.start());
console.log(fortuner.stop());
console.log(lexus.start());
console.log(lexus.stop());
console.log(lexus);
console.log(lexus.setBrand("hello"));
console.log(lexus);
console.log(lexus.brand);
console.log(lexus.model);
console.log(toyotaCar);



class toyotaCar1 {
    constructor(verifi)
    {
        console.log("its a constructor of toyotaCar1");
        this.verifi = verifi;
    }
    model = 2022;
    start()
    {
        console.log("start");
    }

    stop()
    {
        console.log("stop");
    }

    setBrand(brand)
    {
        this.brand = brand;
        console.log(this.brand);
    }

}

let fortuner1 = new toyotaCar1("verified");
console.log(fortuner1);
console.log(fortuner1.verifi);
let lexus1 = new toyotaCar1("unverified");
console.log(lexus1);
console.log(lexus1.verifi);


// Inheritence in JS
// Inharitance is a passng down properties & methods from parent class to child class.


// simple inheritance
class person 
{
    constructor()
    {
        console.log("person");
    }
    eat()
    {
        console.log("eat");
    }

    sleep()
    {
        console.log("sleep");
    }
}


class engineer extends person
{
    
    work()
    {
        console.log("solve problems, build something");
    }

}


// super key word for constructor and overriding functions

class doctore extends person
{
    constructor()
    {
        super();
        console.log("doctore");
    }
    work()
    {
        console.log("solve problems, build something2");
    }

}

let irfan1 = new engineer();
console.log(irfan1);
console.log(irfan1.eat(), irfan1.sleep(), irfan1.work());



class person1 
{
    constructor()
    {
        console.log("person");
    }
    eat()
    {
        console.log("eat");
    }

    sleep()
    {
        console.log("sleep");
    }

}


class engineer1 extends person1
{
    constructor(val)
    {
        super();
        console.log("engineer");
    }


    work()
    {
        console.log("engineer work");
    }

    software()
    {
        console.log("engineer");
    }

}

class doctore1 extends engineer1
{
    constructor(val)
    {
        super(val);
        console.log("doctore");
    }
    work()
    {
        console.log("doctore work");
    }

    patient()
    {
        console.log("doctore");
    }

}

class pilote1 extends doctore1
{
    constructor(val)
    {
        console.log("pilote");
        super(val);

    }
    // work()
    // {
    //     console.log("solve problems, build something3");
    // }

    aeroplane()
    {
        console.log("pilote");
    }

}

let irfan2 = new pilote1(55);
irfan2.work();// high priority function executed inwhich executed will be doctor1 f()
console.log(irfan2);
console.log(irfan2.aeroplane());
console.log(irfan2.eat());
console.log(irfan2.patient());
console.log(irfan2.software());



// constructor overloading is not possible bc in javaScript we have only one constructor in class

// class A
// {
//     constructor(value)
//     {
//         console.log("first");
//     }

//     constructor()
//     {
//         console.log("second");
//     }
// }


// class B extends old
// {
//     constructor(value)
//     {
//         console.log("B");
//     }
//     // super(value);
// }

// let oj = new B(77);



// Let's practise Questions
// Qno 1
// you are creating a website for your college. Create a class User with 2 properties
// name and email. it aslo has a method called viewData() thats allow user to view
// website data

// Ans 1
let DATA = "secret information";

class user 
{
    constructor(name, email)
    {
        this.name = name;
        this.email = email;
    }

    viewData()
    {
        console.log("website data");
    }
}

let student1 = new user("irfan", "@gmail.com");
console.log(student1);
console.log(student1.viewData());
let student2 = new user("aman", "@gmail.com");
console.log(student2);
console.log(student2.viewData());
let teacher1 = new user("sir,chuhan", "@gmail.com");
console.log(teacher1);
console.log(teacher1.viewData());


// Qno 2 
// create a new class called admin which inherits class from user. Add a new method
// called editData to admin that allows it to edit website data.

// Ans 2

class Admin extends user {

    constructor(name, email)
    {
        super(name,email)
    }
    editDAta()
    {
        DATA = "some new value";
    }
}


let Admin1 = new Admin("reactor", "@gmail.com");
console.log(Admin1);
console.log(DATA);
console.log(Admin1.editDAta());
console.log(DATA);



// Errore Handling with try and catch
console.log("hello");
console.log("helloo");
console.log("hellooo");
try{
   console.log("helloooo"), sir;
}catch(err)//err is error object
{
    console.log(err);
}
console.log("hellooooo");
console.log("helloooooo");
console.log("hellooooooo");


























