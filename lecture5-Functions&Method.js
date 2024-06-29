// Functions in JS
//Block of code that performs a specific task, can be invoked whenever needed

//for example we have already some function which is built in function which we learned in past lecturs

"abc".toUpperCase(); // it is also a function when we need for this we can perform again and again 

[3,8,3,7].push(); // it is also a function when we need for this we can perform again and again 


//user define function
//we can create our own function in which we can perform different task 


//basic body of fuction
function myfunction() {
    console.log("welcome to apna college");
    console.log("learn javaScript");
}

//calling function without parameters and we can call function multiple
myfunction();
myfunction();


// fuction with parameters
function myfunction2(msg, x) { // parameter -> input
    console.log(msg, x);
}

myfunction2("i love javaScript", 100);// arguments



function sum(x,y)
{
    //local variable -> scop
    s= x + y;
    return s;
    console.log("after return");// its not possible
}

let  val = sum(8,9);
console.log(val);


// Arrow functions introduce in modern javaScript

let arrowfunction= () => { //arrowfunction use with variable and we can store function in variable 
    console.log("arrowfunction");
}

arrowfunction();

//we can change this variable 

arrowfunction = 5;
console.log(arrowfunction);

// Example for multiplication
let mul= (a,b) => {
    m= a * b;
    return m;
}

let value = mul(8,5);
console.log(value);

mul = 33;
console.log(mul);


//Let's practise
//Qs: Create a function using the "function" keyword that takes a String as an argument and returns the number
//of vowels in the string.

function countvowel(str) {
    let count = 0;

    for(let i of str){

        if(i === "a" || i==="e" || i==="i" || i==="o" || i==="u")
        {
            count++;
         }

    }

        return count;
}

let vowel = countvowel("apnacollege");

console.log(vowel);



// create arrow function for same task

const NOofvowel = (str) => 
{

    let count = 0;

    for(let char of str){

        if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u")
        {
            count++;
         }

    }

        return count;

}

vowel = NOofvowel("javaScript");

console.log(vowel);




// difference b/w function and method
//when any function assocaite with particular object is called method and any fuction which not associate with 
//any particular obj is called function 

// example of method which are already exist in javascript 
"apnacollege".toUpperCase;

[3,8,9].push(); // we have alote of methods which we study in past lectures



//we hava some new Methods for array 
// 1. arr.forEach : it is used for print all value of index of array but this fuction can't return any value
// 2. arr.map : creats a new array with the results of some operaton. the value its callback returns are used to form new array
// 3. arr.filter : creates a new array of elements that give true for a condition/filter. eg all even elements
// 4. arr.reduce : performs some operation & and reduces the array to a single value. it returns that single value




// 1. arr.foreach Loop in Array

arr = [3,9,4,2];
arr1 = [3,9,4,8,2,2];
arr2 = ["irfan", "mumtaz", "sohail", "arif", "liaqat"];


arr.forEach(function print (value){
    console.log(value);
});

arr1.forEach((value) =>{
    console.log(value);
});


arr2.forEach((value, index, arr) =>{// we can pass three inputs with same sequence 1value,2index,3arr
    console.log(value.toUpperCase(), index, arr);
});

// lets practise a question

//Q: for a given array of numbers, print the square of each value using the forEach loop

let arr4 = [3,8,4,1];

arr4.forEach((value) => {
    console.log(value * value); // value**2;
});


//another way to execute same function for forEach
console.log("another way to execute same function for forEach");

let calcsquare = (value) => 
{
    console.log(value * value);
}

arr4.forEach(calcsquare);





// 2. arr.map loop in array
console.log("use of arr.mapp");

let arr5 = [33,22,77,33];

let newarray = arr5.map((value) => 
{
    console.log(value);
    return value * value;
});

console.log(newarray);


// 3. arr.filter loop in array

console.log("use of arr.filter");

let arr6 = [1,8,9,2,3,4];

let Narray = arr6.filter((value)=> 
{
    return value % 2 ===0;
});

console.log(Narray);



// arr.reduce loop in array

console.log("use of arr.reduce");

let arr7 = [4,22,99,3,4,36,44,11,33];

const sumofarray = arr7.reduce((resu, curr) => 
{
    return resu + curr;
});

console.log("the sum of arr7 is = ", sumofarray);



const maxNum = arr7.reduce((prev, curr) => 
{
    return prev > curr? prev : curr ;
});

console.log("maximum number of this array is = ", maxNum);


const minNum = arr7.reduce((prev, curr) => 
{
    return prev < curr? prev : curr;
});

console.log("minimum num of this array is = ", minNum);



// lets practise Questions

// Q: we are given array of marks of students. filter our of the marks of students that scored 90+.
// Ans:
let stmarks = [44,99,88,93,90,79,89,91];

const st90_ = stmarks.filter((value) => 
{
    return value > 90;
});

console.log(st90_);


// Q: take a number n as input from user. create an array of numbers from 1 to n.
// 1. use the reduce method to calculage sum of all numbers in the array.
// 2. use the reduce method to calculate product of all numbers in the array.

let sizeofarray = prompt("Enter size of your array: ");

let _rray = [];

for(let i=1; i<=sizeofarray; i++)
{
    _rray.push(i*2);
}

console.log(_rray);


// Ans1:

let sume = _rray.reduce((prev, curr) => 
{
    return prev + curr;
});

// Ans2:

console.log(sume);

let factorial = _rray.reduce((prev, curr) => 
{
    return prev * curr;
});

console.log(factorial);















// function ss(str1) {
//     console.log(str1);
// }

// ss("irfan");


// function ss1(ss) 
// {
//     console.log(ss);
// }

// ss1(ss);

