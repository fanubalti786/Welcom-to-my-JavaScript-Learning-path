// Sync in js
// we have two types syncs in js first is synchronous and second is Asynchronous


// 1.Synchronous
// synchronous means the codes runs in a particular sequence of instruction given in the programe.
// eacth instruction waits for the previous instruction to complete its execution.
// Example

// console.log("first exexution");
// console.log("second exexution");
// console.log("third exexution");
// console.log("fourth exexution");

// 2.Asynchronous
// Dus to synchronous programing, some time importent instruction get blocked due to some previos
// instructions, which couases a delay in the UIE. Asychronous code execution allows to execute next
// instructions immediately and doesn't block the flow.
// Example1

function hello(a,b)
{
    console.log("hello1",  a+b);
    return a+b; // we can't access retrun value in setTimeout
}

setTimeout(hello(3,4), 2000);

// //Example2

console.log("first");
console.log("second");

setTimeout(() => 
{
   setTimeout(hello, 2000);// we can access function without parameters not accure any error
},2000);

console.log("third");
console.log("fourth");


// CallBacks
// A callback is function passed as an argument to another function.
// Examples

let f1 = (a,b) => 
{
   console.log("sum of a and b = ", a+b);
   return a-b;
}

let f2 = (a,b,f1) => 
{
   // let sub = f1(a,b);// it provides error bc empty values we can't handdle reffer line 435
   let sub = f1(a,b);
   console.log("product of a and b = ", a*b, " and subraction is = ",sub);
}


let f3 = (a,b,f1,f2) => 
{
   f1(a,b);// it's a extra one i add for just checking how it's work
   f2(a,b,f1);
   console.log("division of a and b = ", a/b);
}


f1(3,7);
f2(33,99,f1)
// f2();// no matter if any arguments we don't pass
f3(20,10,f1,f2);
f3(30,40,f1, (a,b,f1) =>
{
   let sub = f1(a,b);
   console.log("multipliction of a and b = ", a*b, "subraction = ", sub);
});






// CallBack Hell

function getdata(dataID, getNextData)
{
   setTimeout(() =>{
      console.log("data", dataID);
      if(getNextData)
         {
            getNextData();
         }

   },2000);
}



getdata(1,() =>{
   console.log("getting data 2 ....");
   getdata(2, () =>{
      console.log("getting data 3 ....");
      getdata(3, () =>{
         console.log("getting data 4 ....");
         getdata(4)
      })
   })
})


//Simple promis creation 
let promis = new promis((resolve,reject) =>
   {
      console.log("i am a promis");
         resolve(success);
         reject(Error);

   })
   // console.log(promis());// don't need to call its a automatic calling process
   consol.log(promis); 
   
   console.log('hello');







