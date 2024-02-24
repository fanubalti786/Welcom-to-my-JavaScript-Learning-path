// DOM: DOCUMENT OBJECT MODEL
// it is used for dynamic changes or manipulation in our web page


console.dir(window); // dir is used for print object information

console.dir(document);

console.log(window); 

console.log(document); // log is used for print all only html data

console.log(document.body); 
console.log(document.body.h2); // its not possible
console.log(document.body.childNodes);
console.log(document.body.firstChild);


console.log(document.head); 

document.body.childNodes[3].style.background = "green";
document.body.children[3].innerText = "nice boy";


// DOM Manipulation
// 1. document.getElementById("myid");
// 2. document.getElementsByClassName("myclass");
// 3. document.getElementsByName("p");
// 4. document.querySelector("myid/myclass/tag")


let byid = document.getElementById("div2");
console.log(byid);

let byclass = document.getElementByClassName("box");
console.log(byclass);

let byclasses = document.getElementsByClassName("box");
console.log(byclasses);


let byname = document.getElementByTagName("h2");
console.log(byname);

let allheading = document.getElementsByTagName("h2");
console.log(byname);

let hidden = document.getElementsByTagName("h2");
console.log(hidden.textContent);



// QuerySelector
// we can access randomly with queryselector
// document.querySelector("myid/myclass/tag")

let firstEle = document.querySelector("div");
console.log(firstEle);


let allEle = document.querySelectorAll("div");
console.log(allEle);


let firstclass = document.querySelector(".box");
console.log(firstEle);


let allclass = document.querySelectorAll(".box");
console.log(allclass);



let firstId = document.querySelector("#div2");
console.log(firstId);

//just learning by itself
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.children);
console.log(document.body.children[0]);
console.log(document.body.childNodes[0]);




let Body1 = document.querySelector("body").innerText;
let Body2 = document.querySelector("body").firstChild;
let Body5 = document.querySelector("body").lastChild;
let Body3 = document.querySelector("body").children[1];
let Body4 = document.querySelector("body").children;
console.log(Body);


let Body = document.querySelector("body");
console.log(Body.firstChild);
console.log(Body.lastChild);
console.log(Body.children[0].innerText);
console.log(Body.children[1]);

// // let Body = document.querySelector("body").div;its not possible
// // console.log(Body.div);


 let Childs1 = document.querySelectorAll(".box");
 console.log(Childs[0].children[0].children[0].innerText);

let Childs2 = document.querySelector(".box").children[0].children[0].innerText;
 console.log(Childs);

let Childs3 = document.querySelectorAll(".box").children[0].children[0].innerText;
// Note its Not possible we can't find all classes children and its properties also
// we can execute all classes separately
console.log(Childs);// no value return





// Query1
let concatText = document.querySelector("h2");
concatText.innerText += "hello";// this line only change browser
console.log(concatText.innerText);// this line provide change output
//concatText.innerText.concat("sahi");// its not possible

// Query2
let l = 0;
let boxxes = document.querySelectorAll(".box");
for(let node of boxxes)
{
   l++;
   node.innerText = `new text for box ${l}`;
}
