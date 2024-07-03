// // class toyotaCar1 {
// //     constructor(verifi)
// //     {
// //         console.log("its a constructor of toyotaCar1");
// //          this.ver = verifi;
// //     }

// //     // ver = "hello";
// //     model = 2022;
// //     start()
// //     {
// //         console.log("start");
// //     }

// //     stop()
// //     {
// //         console.log("stop");
// //     }

// //     setBrand(brand)
// //     {
// //         this.brand = brand;
// //         console.log(this.brand);
// //     }

// //     // var()
// //     // {
// //     //     console.log(var)
// //     // }



// // }

// // let fortuner1 = new toyotaCar1("verified");
// // console.log(fortuner1);
// // console.log(fortuner1.ver);
// // let lexus1 = new toyotaCar1("unverified");
// // console.log(lexus1);
// // console.log(lexus1.verifi);


// // let hello = () => {
// //     var no = 10;
// //     if(no == 10)
// //         {
// //             roll = 20;
// //         }
    
// //     // roll = 30;
// //     // console.log(roll);
// // }

// // // ver = 20;
// // // age = 10;
// // // console.log(age);
// // // console.log(no);
// // console.log(hello());
// // console.log(roll);
// // console.log(no);

// // simple inheritance



// class person1 
// {
//     constructor()
//     {
//         console.log("person");
//     }
//     eat()
//     {
//         console.log("eat");
//     }

//     sleep()
//     {
//         console.log("sleep");
//     }

// }


// class engineer1 extends person1
// {
//     constructor(val)
//     {
//         super();
//         console.log("engineer");
//     }


//     work()
//     {
//         console.log("engineer work");
//     }

//     software()
//     {
//         console.log("engineer");
//     }

// }

// class doctore1 extends engineer1
// {
//     constructor(val)
//     {
//         super(val);
//         console.log("doctore");
//     }
//     work()
//     {
//         console.log("doctore work");
//     }

//     patient()
//     {
//         console.log("doctore");
//     }

// }

// class pilote1 extends doctore1
// {
//     constructor(val)
//     {
//         console.log("pilote");
//         super(val);

//     }
//     // work()
//     // {
//     //     console.log("solve problems, build something3");
//     // }

//     aeroplane()
//     {
//         console.log("pilote");
//     }

// }

// let irfan2 = new pilote1(55);
// irfan2.work();// high priority function executed inwhich executed will be doctor1 f()
// console.log(irfan2);
// console.log(irfan2.aeroplane());
// console.log(irfan2.eat());
// console.log(irfan2.patient());
// console.log(irfan2.software());



// Async Await 
// Async Await is a best way for calling api according to callback and promises

// function getdata(dataID, getNextData)
// {
//    return new Promise((res,rej) =>
//    {
//       setTimeout(() =>{
//          console.log("data");
//          res("Success");
//          // if(getNextData)
//          //    {
//          //       getNextData();
//          //    }
   
//       },2000);
//    });
// }


// async function getapi() 
// {
//    await getdata(1);
//    console.log("fetching data 1 ...");
//    await getdata(2);
//    console.log("fetching data 2 ...");
//    await getdata(3);
//    console.log("fetching data 3 ...");
//    await getdata(4);
//    console.log("fetching data 4 ...");
   
// }


// getapi();




 






