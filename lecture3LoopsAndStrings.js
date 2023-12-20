// Loops in js
// loops are used to execute a piece of code again and again its a itration process also


//print 1 to 5 Apna college

for(let i=1; i<=5; i++)
{
    console.log("Apna College");
}

// print 1 to 1000
for(let i=1; i<=1000; i++)
{
    console.log("Apna College");
}

//print 1 to 5 value of i

for(let i=1; i<=5; i++)
{
    console.log("i ", i);
}



// calculate sume of 1 to 5
let sum = 0;
for(let i=1; i<=5; i++)
{
    sum = sum + i;
}
console.log("the sume of 1 to 5 is ", sum);


// difference of let and var
console.log("difference of let and var");

console.log(i); //the value of let i exist only body as local variable so we
                // cant print value of i it give error which is undefined


for(var i=1; i<=5; i++)
{
    console.log("i ", i);
}

console.log(i); // the value of var i exist in all body as global variable so we can print easyli anywhere


// Infinit loop: A loop what never ends

// for(var i=1; i<=0; i++)
// {
//     console.log("i ", i);
// }



// while loop
i = 1;
while(i<=5)
{
    console.log("i ", i);
    i++;
}


i = 1;
do
{
    console.log("Apna College");
    i++;
}while(i<=10);

i = 20;
do
{
    console.log("do while execute one itration atleats without any condition true");
    i++;
}while(i<=10);


// for of loop: these type of loops are used for apply on some special type of data
             //and in this loop we use only string and array variable

let str = "ApnaCollege";
for(let i of str)
{
    console.log("i = ",i);
}


// we can fined length of str using for of loop
let char =0;
for(let i of str)
{
    char++;
}

console.log(char);


// for in loop: we use for in for object keys itrations

let student = {
    Name : "irfan",
    roll : 333,
    age : 22,
    cgpa : 7.5,
    isPass : true
};

for(let key in student)
{
    console.log("key = ", key);
}

for(let key in student)
{
    // console.log("key = ", key, " value is ", student.key); we can't do that for print values of object
    console.log("key = ", key, " value is ", student[key]);

}

//console.log(student["Name"]); remembering past concept for practise


// Lets practise with some questions

// Qno1: print all even numbers from 0 to 100;

for(let i = 1; i<=100; i++)
{
    if(i % 2 === 0)
    {
        console.log(i);
    }

}

// for odd
console.log("For odd number");

for(let i = 1; i<=100; i++)
{
    if(i % 2 !== 0)
    {
        console.log(i);
    }

}


// Qno2: creat a game where you start with any random game number.
        // Ask the user to keep guessing the game number until the user inters correct value


// let gameNumber = 20;
// let userNumber = prompt("Gues your game number from 1 to 20 you have only three attempts");
// let attempts = 0;
// while(gameNumber!=userNumber)
// {
//     attempts++;
//     if(attempts<3)
//     {
//         userNumber = prompt("your guess number is wrong plz try again you have been already attempt ", attempts);

//     }

//     else
//     {
//         console.log("you loss the game");
//         break;
//     }
    
// }

// console.log(Name.length);
// if(gameNumber==userNumber)
// {
//     console.log("congradualation you win the game");
// }


//String in javaScript: string is a sequence of characters used to present text
// A. inbuilt properties 
// B. inbuilt function or method

// A. inbuilt propertis

// 1. create string 
let Name = "irfan";

// 2. string length
console.log(Name.length);


// 3. index or indices

let str2 = "ApnaCollege";

console.log(str[0]);// A


// 4. Template Literals: A way to have embeded expressions in string so this is a template literal
let specialString = `this is a template literal`;

console.log(typeof specialString);

let obj = {
    item : "pen",
    price : 30,
};

console.log("item is ", obj.item, "price is ", obj.price);

// string intepolation
console.log(`item is ${obj.item} and price is ${obj.price}`);
console.log(`item is ${1+3/2} and price is ${3*4/5}}`);


// 5. escape char: \n(use for next line) \t(use for tab space)
console.log("Apna\nCollege");
console.log("Apna\tCollege");
let str3 = "Apna\nCollege";
console.log(str3.length);// length is 12 because escap sequence cover only 1 space


// 6. String methods: thats are built-in functions to manipulate a string but all function 
    //can't change the original string bc thats are immutable with build-in function
// a) str.toUpperCase(): used for change in capital later
// b) str.toLowerCase(): used for change in lower later
// c) str.trim(): used for remove white spaces before and after the string remember not inside the string  
// d) str.slice(): we can slice over string with every condition ex(1, 5) inwhich 5 i not inclue bc it start 0 index
// e) str1.concat(str2). inwhich we can easily join two or more strings
// f) str.replace(searchval, newval)
// g) str.charA(idx)


// a) upperCase
str3 = "ApnaCollege";
str3.toUpperCase();
console.log(str3);//lower case characters are stored in this string bC str3 has its original value
let str4 = str3.toUpperCase();
console.log(str4);//thats print a uppercase later of apnacollege bc we creat new str in which store upper char

// b) LowerCase
let str5 = str3.toLowerCase();
console.log(str5);//it is used for lower case


// c) str.trim()
let str6 = ("     Apna   college youtube channal   ");
let Trim = str6.trim();//thats not possible 
console.log(Trim);
console.log(str6.trim());// we use always like that way to trim the string 


// d) str.slice()
let str7 = "74683747";
let str8 = "fanubalti";
console.log(str7.slice(2, 5));//683 and 5 value not count bc index start from 0
console.log(str8.slice(3, 5));//ub and value not count bc indec start from 0

// e) str1.concat(str2)
let str9 = "fanu";
let str10 = "balti";
let FullName = str9.concat(str10);
console.log(FullName);
console.log(str9.concat(str10));
console.log("hello i'm " + str9 + str10);


// f) str.replace(searchval, newval)

let str11 = "hellololo";
console.log(str11.replace("h", "y"));
console.log(str11.replace("h", "kha"));
console.log(str11.replace("ll", "pp"));
console.log(str11.replace("h", "y"));
console.log(str11.replace("lo", "p")); //first matching characters execute

// g) str.charA(idx)

let str12 = "ILoveJS";
console.log(str12.charAt(0));//output is I: its a long foarm and its a function
console.log(str12[0]);//output is I: its a short foarm and its property
str12[0]="S";
console.log(str12[0]);//output is I: bc we can't change original string we will make new string for change 
let res = str12[0]="S";
console.log(res);//output is S: its not a original string value 



// Practise Question
// prompt the user to enter their full name. Generate the username for them based on the input
    //Start user with @, followed their full name and ending with the full name length?


let FullNaMe = prompt("Enter your full name and recieve your snapchat username");

let userName = "@" +  FullNaMe + FullNaMe.length;
console.log("your user name is :",userName);




























