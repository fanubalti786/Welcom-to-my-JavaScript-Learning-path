// // console.log("hello");
// // // alert("something gonna wrong");

// // age = 88;
// // color = 33;

// // console.log("22 " + "its your age");

// // Name = null;
// // cnic = undefined;

// // console.log(color);

// // const student = {
// //     Name : "irfan",
// //     rollno : "333",
// // };

// // console.log(typeof student.rollno);
// // console.log(typeof age);
// // console.log(typeof color);
// // console.log(typeof student["Name"]);


// // console.log(age , color);


// // let isFollow = true? "you follow it" : "you not follow it";

// // console.log(isFollow);


// // // console.log("calculate your average marks");
// // // let subjects = prompt("how many subjects you have");
// // // // const marks = new Array(subjects).fill(0);
// // // let marks
// // // let sum = 0;
// // // console.log("inter your subject marks");
// // // for(a=0; a<5; a++)
// // // {
// // //     marks[a] = prompt();
// // //     sum += marks[a];

// // // }

// // // let average = sum / subjects;

// // // console.log("your average marks is : ", average);


// let number = "3857493";
// console.log(number.slice(0,6));
// // console.log("hello" + number + number);

// // let str = "ApnaCollege";
// // for(let i of str)
// // {
// //     console.log("i = ",i);
// // }
// // let hello = undefined;
// // hello++;
// // console.log(hello);
// // let charr=0;
// // for(let i of number)
// // {
// //     console.log("i = :", i);
// //     charr++;
// // }

// // console.log(charr);
// // let arr = [1,3,4,7];

// // for(let index of arr)
// // {
// //     console.log(index);
// // }


// // let student1 = {
// //     Name : "irfan",
// //     roll : 333,
// //     age : 22,
// //     cgpa : 7.5,
// //     isPass : true
// // };

// // for(let key in student1)
// // {
// //     console.log(key, "= ", student1[key]);
// // }


// // for(let i = 1; i<=100; i++)
// // {
// //     if(i % 2 === 0)
// //     {
// //         console.log(i);
// //     }

// // }

// // let m = 3;

// // console.log(m++);
// // console.log(m);


// // let less = "string";
// // console.log(less.replace("s", "subs"));
// // console.log(less);


// // // let winningNumber = 20;
// // // let userGues = prompt("Gues your game number from 1 to 20 you have only three attempts");
// // // let attempts = 0;
// // // while(winningNumber!=userGues)
// // // {
// // //     attempts++;
// // //     if(attempts<3)
// // //     {
// // //         userGues = prompt(`your guess number is wrong plz try again you have been already attempt ${attempts}`);

// // //     }

// // //     else
// // //     {
// // //         console.log("you loss the game");
// // //         break;
// // //     }
    
// // // }

// // // if(winningNumber == userGues)
// // // console.log("congradulation you win the game");


// // let arr3 = [3,9,"irfan",8,2];
// // console.log(arr3);

// // let arr4 = [33,99,44,88,77];
// // let sume = 0;
// // for(let index of arr4)
// // {
// //     sume += index;
// // }

// // console.log(`your marks average is ${sume / arr4.length}`);


// let arr = [99,33,88,22,55];
//  let i = 0;
//  for(let price of arr)
//  {
   
//     console.log(`price before offer of item ${i+1} : ${price}`);
//      arr[i] = price / 10;

//     console.log(`price after 10per offer of item ${i+1} : ${arr[i]}`);
//     i++;

//  }


// // let arr5 = [33,88,44,99,355]
// // for(let i = 0; i<arr5.length; i++)
// // {
    
// //     console.log(`price before offer of item ${i+1} : ${arr5[i]}`);
// //     let offer = arr5[i] / 10;
// //     arr5[i] -= offer;

// //     console.log(`price after 10per offer of item ${i+1} : ${arr5[i]}`);
// // }

// // console.log(arr5.length);


// // 4. concate()
// let pk_players = ["shoib", "afridi", "babar", "amir"];
// let ind_players = ["kholi", "dhoni", "bhumra", "rohit"];

// let united_players = pk_players.concat(ind_players);
// console.log("all players of united : " ,united_players, united_players[0]);


// let sample_players = pk_players.slice(3); //origin will not change gotit
// console.log(sample_players, typeof sample_players);


// let jd= "3884848";
// let check = jd.slice(3);
// console.log(check);
// console.log(typeof check);

// let update_nam = pk_players[0].slice(1,3);
// console.log(update_nam);


// let kk = [3,9,3,8,7,6];
// kk.splice(8,0,11);//add in last 
// kk.push(33);// same one againt the up one code
// console.log(kk);

// function countvowel(str) 
// {
//    let count = 0;
//    for(let value of str)
//    {
//       if(value == "a" || value == "e" || value == "i" || value == "o" || value == "u")
//       {
//          count++;
//       }
//    }

//    return count;
// }

// let vowel = countvowel("apnacollege");

// console.log(vowel);


// let countvow = (strr) => 
// {
//    let increase = 0;
//    for(let val in strr)
//    {
//       if(strr[val] == "a" || strr[val] == "e" || strr[val] == "i" || strr[val] == "o" || strr[val] == "u")
//       {
//          increase++;
//       }

//    }

//    return increase;
// }

// console.log(countvow("apnacollege"));
// countvow = 5;
// console.log(countvow);


// let arrd = ["irfan","mumtaz","haider", "liaqat"];

// arrd.forEach(function print(value,index,arr)
// {
//    console.log(value,index,arr);
// });

// arrd.forEach((value,index,arr) =>
// {
//    console.log(value,index,arr);
// });

// let square = (vall) =>
// {
//    return vall * vall;
// }

// let arrf = [3,7,55,98,99,22,34];
// // arrf.forEach(square);// its a correct one
// //arrf.forEach(square(val));// we can't pass the val when we just callback the user define 
// // funciton 

// //let new = arrf.forEach(square);// that's not correct in foreach and it is used for new arr

// //let sq = arrf.filter(square)// its not possible bc its not done only filter its mean they return full arr
// let sq = arrf.reduce((pre,next)=> 
// {
//    return pre + next;
// });
// console.log(sq);

// let greatval = arrf.reduce((pre,next) => 
// {
//    return pre<next? pre:next;
// });
// console.log(greatval);


// //DOM
// // Query1
// let concatText = document.querySelector("h2");
// concatText.innerText += "hello";// this line only change browser
// console.log(concatText.innerText);// this line provide change output
// //concatText.innerText.concat("sahi");// its not possible

// // console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.children);
// console.log(document.body.children[0]);



// // let Body = document.querySelector("body").innerText;
// // let Body = document.querySelector("body").firstChild;
// // let Body = document.querySelector("body").children[1];
// // let Body = document.querySelector("body").children;
// // console.log(Body);


// // let Body = document.querySelector("body");
// // console.log(Body.firstChild);
// // console.log(Body.lastChild);
// // console.log(Body.children[0].innerText);
// // console.log(Body.children[1]);

// // let Body = document.querySelector("body").div;
// // console.log(Body.div);//thats not possible


// // let Childs = document.querySelectorAll(".box");
// // console.log(Childs[0].children[0].children[0].innerText);

// // let Childs = document.querySelector(".box").children[0].children[0].innerText;
// // console.log(Childs);



// // Query2
// let l = 0;
// let boxxes = document.querySelectorAll(".box");
// for(let node of boxxes)
// {
//    l++;
//    node.innerText = `new text for box ${l}`;
// }


// let index = prompt("Enter your array size");
// let bb = [];
// for(let a=0; a<index; a++)
// {
//    let value = prompt("Enter first value");
//    bb.push(value);
// }


// let kkkk = [3,88,44,22];

// let niwarr = kkkk.forEach((value) => 
// {
//    if(value % 2 === 0)
//    {
//       return value**2;
//    }
// }
// );

// console.log(niwarr);

// let kkkk1 = [3,88,44,22];

// let niwarr1 = kkkk1.map((value) => 
// {
//    if(value % 2 === 0)
//    {
//       return value**2;
//    }
// }
// );

// console.log(niwarr1);

// let kkkk2 = [3,8,4,2];

// let niwarr2= kkkk2.filter((value) => 
// {
   
//    return value % 2 === 0;
      
// }
// );

// console.log(niwarr2);


// let div = document.querySelectorAll(".box");
// for(let box of div)
// {
//    box.setAttribute("class", "by");
// }

// let body = document.querySelector("body");
// console.log(body);

// let a = 5;
// console.log(a);
// a = "hello";
// console.log(a);




// let kkkk3 = [3,88,44,22];

// let niwarr3 = kkkk.reduce((result,next) => 
// {
//    return result>next? result:next;// maximum
//    // return result>next? result:next;// minimum

// }
// );

// console.log(`maximum value in this arr is : ${niwarr3}`);


// let som = kkkk.reduce(function suum(result,next)
// {
//    return result + next;
// });

// console.log(som);



// let aerofunc = (val) => 
// {
//    return val;
// }
// console.log(aerofunc(33), aerofunc);
// aerofunc = 50;
// console.log(aerofunc);

// Qno2: creat a game where you start with any random game number.
// Ask the user to keep guessing the game number until the user inters correct value






// let f1 = (a,b) => 
// {
//    console.log("sum of a and b = ", a+b);
//    return a-b;
// }

// let f2 = (a,b,f1) => 
// {
//    // let sub = f1(a,b);// it provides error bc empty values we can't handdle reffer line 435
//    let sub = f1(a,b);
//    console.log("product of a and b = ", a*b, " and subraction is = ",sub);
// }


// let f3 = (a,b,f1,f2) => 
// {
//    f1(a,b);// it's a extra one i add for just checking how it's work
//    f2(a,b,f1);
//    console.log("its a f3", a/b);
// }


// f1(3,7);
// f2(33,99,f1)
// f2();// no matter if any arguments we don't pass
// f3(20,10,f1,f2);
// f3(30,40,f1, (a,b,f1) =>
// {
//    let sub = f1(a,b);
//    console.log("its a f2", a*b, "subraction = ", sub);
// });


// let sum = (a,b) => 
// {
//    console.log("sum of a and b is : ", a+b);
//    console.log("hello brother");
// }

// console.log(sum(8,6));

// setTimeout(sum(8,7),2000);



// let square = (a,b,c) =>
//    {
//       console.log(a+b);
//       console.log(c); 
//    }

// let arr = [3,8,6];

// arr.forEach(square);



// function getdata(dataID, getNextData)
// {
//    setTimeout(() =>{
//       console.log("data", dataID);
//       if(getNextData)
//          {
//             getNextData();
//          }

//    },2000);
// }



// getdata(1,() =>{
//    console.log("getting data 2 ....");
//    getdata(2, () =>{
//       console.log("getting data 3 ....");
//       getdata(3, () =>{
//          console.log("getting data 4 ....");
//          getdata(4)
//       })
//    })
// })


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
         
      },2000)
   })
}



function asyncFunction2() {
   return new promis ((resolve,reject)=>
   {
      setTimeout(()=> 
      {
         console.log("data 2");
         
      },2000)
   })
}




let promis1 = asyncFunction();
console.log("fetching data 1 ....");
promis.then((res) =>
{
   console.log(res);
});



let promis2 = asyncFunction1();
console.log("fetching data 1 ....");
promis.then((res) =>
{
   console.log(res);
});


let promis3 = asyncFunction1();
console.log("fetching data 1 ....");
promis.then((res) =>
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
promis.then((res) =>
{
   console.log(res);
   console.log("fetching data 2 ....");
   let p2 = asyncFunction1();
   promis5.then((res) =>
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
   return new promis((res,rej) =>
   {
      setTimeout(() =>{
         console.log("data", dataID);
         resolve("Success");
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
         consol.log(res);
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
   return new promis((res,rej) =>
   {
      setTimeout(() =>{
         console.log("data");
         resolve("Success");
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



// IIFE Function
// it is used for function execution without call 

(async function getapi() 
{
   await getdata(1);
   console.log("fetching data 1 ...");
   await getdata(2);
   console.log("fetching data 2 ...");
   await getdata(3);
   console.log("fetching data 3 ...");
   await getdata(4);
   console.log("fetching data 4 ...");
   
})();









