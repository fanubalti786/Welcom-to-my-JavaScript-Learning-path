// GETATTRIBUTE 
// it is used for how we can get the attributes of all tags 

let div1 = document.querySelector("div").getAttribute("class");
let div2 = document.querySelector("div").getAttribute("name");
//document.querySelector("div").getAttribute("name","class");//its not possible
console.log(div1);
console.log(div2);
// console.log(div.getAttribute("class"));


//SETATTRIBUTE
//it is used for update or change previous Attribute but they can't return back any value
let div3 = document.querySelector("div").setAttribute("name","by");
console.log(div3);// the value of div3 is undefined bc its change only runtime at code element

let div4 = document.querySelector(".box");
div4.setAttribute("name","byy");
// div4.setAttribute("class","concate2") // we can set all classes name with single name
// console.log(div3);


//NODE.STYLE
//it is used for specific node style 
document.querySelector("div").style.backgroundColor="red";
let bcgr = document.querySelector("div");
bcgr.style.backgroundColor="green";
console.log(bcgr);//can't return any value because we just change style

// document.querySelectorAll(".box").style.backgroundColor="green";its also not possible
// bc its a multiple values
let boxs = document.querySelectorAll(".box");// its a right way for multiple values
boxs[0].style.backgroundColor="pink";
boxs[1].style.fontSize="20px";

// let jjj = document.querySelectorAll(".box").innerText;its not possible for multiple
// console.log(jjj);

document.querySelector("div").style.fontSize="23px";
document.querySelector("div").innerText="Hello!";

document.querySelector("h2").style.visibility="hidden";
let hide = document.querySelectorAll(".box");
// hide[0].style.visibility="hidden";
// hide[1].style.visibility="hidden";




// Creat Element dynamically with javaScript
// it is used for new taq addition with value and style lets see how its possible


let newbutton = document.createElement("button");
console.log(newbutton);
newbutton.innerText = "Click!";
newbutton.style.backgroundColor="aqua";
let _1stclss = document.querySelectorAll(".box");
// when we create any element and push at all angle or area then only high priority will
//be execute and we can apply the new create element only one place (just one time) if
// you want more like a that button then you creat same element with diff variable
_1stclss[2].prepend(newbutton);// priority high1
 _1stclss[1].append(newbutton);// priority high2
_1stclss[0].before(newbutton);// priority high3
 _1stclss[0].after(newbutton);// priority high4 (remaining 3 will rejected 
//  its mean last one have hight priority)

 let top1 = document.createElement("h1");
 top1.innerHTML = "<i>Hi, i am new here!</i>";

 document.querySelector("body").prepend(top1);



let button = document.createElement("button");
button.innerText = "Click Me!";
button.style.color = "white";
button.style.backgroundColor = "green";

let button1 = document.createElement("button");
button1.innerText = "Click Me!";
button1.style.color = "white";
button1.style.backgroundColor = "green";

let boxs = document.querySelectorAll(".box");

boxs[0].append(button);
// boxs[0].prepend(button); its not possible we can't do that
boxs[1].append(button1);

// document.querySelector("h2").after(button); its also not possible we 
// can past button only one time in all body




 // Delete Elements
 // it is used for remove elements dynamically

 let rh2 = document.querySelector("h2");
 rh2.remove();

 let rh1 = document.querySelector("h1");
 rh1.remove();

 let rdiv = document.querySelector("div");
 rdiv.remove();



 // Let's practise 

//  Qno1: Create a new button element.Give it a text "Click me!", background color
//  of red & text color of white.

// Ansno1:
let newbutton2 = document.createElement("button");
newbutton2.innerText = "Click me!";
newbutton2.style.backgroundColor="red";
newbutton2.style.color="white";


document.querySelector("body").prepend;


// Qno2: Create a <p> tag in html, give it a class & some styling.
//    Now creat a class in css and try to append this class to the <p> element.
//    Did you notice, how you overwrite the class name when you add a new one?
//    Solve this problem using class list.

// Ansno2:
// we can't solve like a that 
let get = document.querySelector("div").getAttribute("class");
console.log(get);
// document.querySelector("div").setAttribute("class","newclass");

// we use for this question only classList

let newclass = document.querySelector("div");
console.log(newclass.classList);

newclass.classList.add("newclass");

console.log(newclass.classList);

newclass.classList.remove("newclass");

























