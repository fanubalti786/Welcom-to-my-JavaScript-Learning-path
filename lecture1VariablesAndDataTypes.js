console.log("Welcome to java mastery path");
console.log("how we can use the print function with console.log and alert function")
console.log("My name is irfan haider");
console.log("my first lacture of javaScript")
alert("something gonna wrong");;

console.log("2nd lecture");
console.log("inthis lecture i will explore all dynamic data types of javascript");
age = 20;

//the + sign in console concate the all data with together and make like string 
console.log(age +" its data type is number");
fullName = "irfan haider";
console.log(fullName + " its data type is string");
price = 1.5;
console.log(price + " its data type is number");
x = null; // null value means we have nothing in this variable
console.log(x + " its data type is null");
y = undefined; // in this variable we don't know what actually data exist in this variable
console.log(y + " its data type is undefined");

is_Follow = false; 
console.log(is_Follow + "its data type is boolian");

console.log("we don't have default values in all data type variables");
console.log("because its a dynamically typed");

// LET, VAR, CONST DATA TYPRES 

//var
var age = 10;
console.log(age + " we used var for data type");
var age = 10;
console.log(age + " var data type is bad practise because we can modify the var function with same daty type and variable Name ");

// let
let cnic = 8787540499;
console.log(cnic + " we used let for data type");

// let cnic = 45877984958; // we cant change like that in let variable so its provides read ability good against var

const rollno = 38;// we can only inilize this variable when we declare other wise it gave errore
console.log(rollno + " data type is constant we cant chage this variable value its a fix one");
//rollno = 44;  we cant chage this variable value its a fix one

let hello; // when we simple declaring the variable without inilization then the variable have not default value 
console.log(hello + " this age value will show undefined value when its run")

{
    let localVariable = 10;// its a local variable we can't access this variable outside from this block 
    console.log(localVariable);
}


// let sahi = localVariable; we can't use this variable outside because its local variable
// console.log(localVariable);

// {
//      let 2ndLocal = localVariable; we also can't use this variable another block or function 
//     console.log(localVariable);
// }

//use of typeof

age = 29;
typeof age // typeof this keyword is used for identify variable data type 

// we have two types of variable primitive and non primitive

//  PRIMITIVE
//  1.number
//  2.string
//  3.boolean
//  4.undefined
//  5.null
//  6.Bigint
//  7.Symbol

let blackmoney = BigInt("88477464488347747874");
console.log(typeof blackmoney);


// NON-PRIMITIVE
// 1.objects
// 2.function
// 3.arrays


//OBJECTS
// QNO1: Create a const object called "product" to store information shown in the picture?

//ANO1:

const product = { // const struct means we can't change di structure of product object but we can change only storing date 
    title: "Ball pen",
    rating: 4,
    offer: 50,
    price: 373,
};

console.log(product);
console.log(product["offer"]);
console.log(product["title"]);
console.log(product.price);

product["rating"] = 9;
console.log(product.rating + " i changed value");

product.title = "pointer";
console.log(product.title + " i changed value");


//OBJECTS
// QNO2: Create a const object called "profile" to store information shown in the picture?

//ANSNO2:

const profile= { // const struct means we can't change di structure of product object but we can change only storing date 
    userName: "@fanubali786",
    isFollow: false,
    followers: 507485,
    following: 5,
};

console.log(profile);
console.log(profile["userName"]);
console.log(profile["isFollow"]);
console.log(profile.followers);

product["following"] = 9;
console.log(profile.following + " i changed value");

product.title = "userName";
console.log(profile.userName + " i changed value");


console.log(typeof profile["userName"]);
console.log(typeof profile["isFollow"]);


















 




