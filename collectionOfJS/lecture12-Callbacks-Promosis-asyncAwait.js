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
let promis = new Promis((resolve,reject) =>
   {
      console.log("i am a promis");
         resolve("success");
         // reject(Error);

   })
   // console.log(promis());// don't need to call its a automatic calling process
   console.log(promis); 
   
   console.log('hello');



   

   // Basics of promis with then and catch method 
const getpromis = () =>
   {
      return new promis((res,rej) =>
         {
            console.log("i am a promiss");
            // resolve("Success");
            reject("Network Erroe");
         })
   }
   
   
   let promiss = getpromis();
   promiss.then((res) => 
   {
      console.log('promis fullfilled', res);
   
   });
   
   promiss.catch((rej) => 
   {
      console.log('promis fullfilled', rej);
   
   });








   
// Problem will be occure if we call multiple promisses they execute at same time

function asyncFuntion() {
   return new promis ((resolve,reject)=>
   {
      setTimeout(()=> 
      {
         console.log("data");
         resolve("Successfull");
         
      },4000)
   })
}

function asyncFunction1() {
   return new promis ((resolve,reject)=>
   {
      setTimeout(()=> 
      {
         console.log("data 1");
         resolve("Success");
         
      },2000)
   })
}



function asyncFunction2() {
   return new promis ((resolve,reject)=>
   {
      setTimeout(()=> 
      {
         console.log("data 2");
         resolve("Success");
         
      },2000)
   })
}




let promis1 = asyncFunction();
console.log("fetching data 1 ....");
promis1.then((res) =>
{
   console.log(res);
});



let promis2 = asyncFunction1();
console.log("fetching data 1 ....");
promis2.then((res) =>
{
   console.log(res);
});


let promis3 = asyncFunction1();
console.log("fetching data 1 ....");
promis3.then((res) =>
{
   console.log(res);
});

// Problem will be occure when we execute multiple promis which means all function 
// provide us feedback at a same time but we don't want this we just want 
// these function execute orderly one by one because we want when we recieve 1st
// function feedback and then we check its a true then we move next function if 
// its fall or rejected promiss then don't need to go another function and execute
// them all for example login function inwich we check first username if its true then 
// we move passoword function otherwise no nead to go for check the password for 
//  this reason we use promis chain which resolve our this problem






// promis chain is better than as compare to callback 

let p1 = asyncFunction();
console.log("fetching data 1 ....");
p1.then((res) =>
{
   console.log(res);
   console.log("fetching data 2 ....");
   let p2 = asyncFunction1();
   p2.then((res) =>
   {
      console.log(res);
      console.log("fetching data 3 ....");
      let p3 = asyncFunction2();

   });

});



// we can more simplify promis chain

console.log("fetching data 1 ....");
asyncFunction().then((res) =>
{
   console.log("fetching data 2 ....");
   asyncFunction1.then((res) =>
   {
      console.log("fetching data 3 ....");
      asyncFunction2().then( (res) =>
      {
         console.log(res);
      })

   });

});




// we apply promiss chain on callback hell code which we resolve first before promis chain



function getdata(dataID, getNextData)
{
   return new Promise((res,rej) =>
   {
      setTimeout(() =>{
         console.log("data", dataID);
         res("Success");
         // if(getNextData)
         //    {
         //       getNextData();
         //    }
   
      },2000);
   })
}


console.log("fetching data 1 ...");
getdata(1).then((res) =>
{
   console.log("fetching data 2 ...");
   getdata(2).then((res) =>
   {
      console.log("fetching data 3 ...");
      getdata(3).then((res) => 
      {
         console.log(res);
      })
   });


});


// we can do more simplify of our promis chain
getdata(1)
.then((res) =>
{
   return getdata(2);
})
.then((res) => 
{
   return getdata(3);
})
.then((res) => 
{
   console.log(res);
});



// Async Await 
// Async Await is a best way for calling api according to callback and promises

function getdata(dataID, getNextData)
{
   return new Promise((res,rej) =>
   {
      setTimeout(() =>{
         console.log("data");
         res("Success");
         // if(getNextData)
         //    {
         //       getNextData();
         //    }
   
      },2000);
   })
}


async function getapi() 
{
   await getdata(1);
   console.log("fetching data 1 ...");
   await getdata(2);
   console.log("fetching data 2 ...");
   await getdata(3);
   console.log("fetching data 3 ...");
   await getdata(4);
   console.log("fetching data 4 ...");
   
}


getapi();