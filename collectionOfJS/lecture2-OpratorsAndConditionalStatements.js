// Arithmatic operators(+ - * / % **)
let a = 5;
let b = 2;
console.log("a = ", a , "& b = ", b);
console.log("a + b = ", a+b);
console.log("a + b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a ** b);//5^2

// unary operators(incremet and decremetn with post and pre)
a = a + 1;
console.log(a);//6

console.log(a++);// the print value of a is 6 becuase its a post increment 
console.log(a);
a = a - 1;
console.log(a);//6

a = ++a;
console.log(a);// the print value of a is 7 becuase its a pre increment

a = a++; // value of a is again 7 bc a++ first do assign so thats why a value is agian 7
console.log(a);// the print value of a is 7 becuase post increment just assigning

a++; // this senario is total different according to (a = a++) this bc its not diectly assingn
// in this process increment is necessarey
console.log(a); // the print value of a is 8

a = --a;
console.log(a);// the print value of a is 7 becuase its a pre degrement

a = a * 1;
console.log(a);// 7

a = a / 5;
console.log(a);// 1.4

a = a % 2;
console.log(a);// 1.4


// Assingment Operators(= += -= *= %= **=)
a += 1; // a = a + 1; its a same one
console.log(a); 

a -= 1; // a = a - 1; its a same one
console.log(a); 

a *= 1; // a = a * 1; its a same one
console.log(a); 

a /= 1; // a = a / 1; its a same one
console.log(a);

a %= 1; // a = a % 1; its a same one
console.log(a); 

a **= 1; // a = a ** 1; its a same one
console.log(a); 



// comparison Operators

// 1. equal to (==)
// 2. not equal to (!=)
// 3. equal to & type ===
// 4. not equal to & type !==
// 5. greater than >
// 6. less than <
// 7. greater than and equal to >=
// 8. less than and equal to <=

let x = 5;
let y = 2;
console.log("5 == 2", x == y); // output false
y = 5;
console.log("5 == 5", x == y); // output true
console.log("5 != 5", x != y); // output false

let z = "5"; // string
console.log("5 == 5", x == z); // output true
console.log("5 == 5", x == z); // output true
console.log("5 === 5", x === z); // output true
console.log("5 !== 5", x !== z); // output false
y = 2;
console.log("5 > 2", x > y); // output true
console.log("2 < 5", y > x); // output true
console.log("2 <= 5", y <= x); // output true
console.log("5 >= 2", x >= y); // output true


// Logical Operators
// 1. AND (&&)
// 2. OR (||)
// 3. NOT (!)

console.log("2 < 5 , 5 > 2", y < x && x > y); // both condition should be true
console.log("2 > 5 , 5 > 2", y > x || x > y); // one condition should be true
console.log("2 < 5",  !(y > x)); // this operator give me a opposite answer which is fase



// Conditional Operator
// 1. if
// 2. if and else
// 3. if elseif... and else
// 4. Ternary operator 



let age = 16;

if(age >= 18) console.log("you can vote"); // no need brackets{} for single if statement


if(age<18){
    console.log("you can't vote");
}

let mode = "dark";
let color;

if(mode == "dark")
{
    color = "black";
}
else
{
    color = "white";
}

// odd or even
let num1 = 443;
let num2 = 888;

if(num2 % 2 === 0)
{
    console.log( num2 , " is even");
}
else
{
    console.log( num2 , " is odd");
}


if(age < 18)
{
    console.log("you are junior according to age");
}

else if(age>60){
    console.log("you are senior according to age");
}

else if(age>80 && age < 100)
{
    console.log("you are extraordinary according to age");
}

else
{
    console.log("you are middle according to age");
}


// Tornary operator

age = 16;

let result = age >= 18? "you are adult" : "you are not adult";
console.log(result);

age >= 18? console.log("you are adult") : console.log("you are not adult");

//switch statemtent[]\7



// MDN Documentation 
// its a online documentation of javaScript where we can easily access all code with examples and we can make our jurney easier


//PRACTISE QUESTIONS
//QNO1: get user to input a number using prompt("Enter your number"). Check the number is multiple of 5 or not?

let num = prompt("Enter your number");
if(num % 5===0)
{
    console.log(num, "is a multiple of 5");

}
else
{
    console.log(num, "is Not a multiple of 5");
}

//QNO2: write a code which can give grades to students according to their percentage of marks?
// 90 to 100, A 
// 70 to 89, B 
// 60 to 69, C 
// 50 to 59, D 
// 0 t0 49, F 


let AverMarks = prompt("Enter your marks percentage (0 to 100)");

if(AverMarks>=90 && AverMarks<=100)
{
    console.log("you got A grade");
}

else if(AverMarks>=70 && AverMarks<=89)
{
    console.log("you got B grade");
}

else if(AverMarks>=60 && AverMarks<=69)
{
    console.log("you got C grade");
}

else if(AverMarks>=50 && AverMarks<=59)
{
    console.log("you got D grade");
}

else if(AverMarks>=0 && AverMarks<=49)
{
    console.log("you got F grade its mean you are fail");
}

else 
{
    console.log("your input is invalid");
}

//jjjj






















