// Events in javaScript
// the change in the state of an object is known as an event
// Events are fired to notify code of "interesting changings" that may effect codee execution

// 1.Mouse Events(click,double click etc.)
// 2.Keyboard events(keypress,keyup,keydown)
// 3.Form events(submit etc.)
// 4.Print event and manu more


let button = document.querySelector("button");

button.onclick = (evt) =>
{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);


    console.log("btn wass click 1 time");
    let a = 25;
    a++;
    console.log(a);
}


button.onclick = (evt) =>
{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);


    console.log("btn wass click 2 time");
    let a = 25;
    a++;
    console.log(a);
}


// we can make event copy again but only one will be execute which is last one 
// bc last one has highest priority and it is a problem which can resolve 
// only addListnerEvent which is perfectly use for event handling



// when we assign event with two different event name example we have two event first
// one is click and next one is double click then result is both event will be execute
// when we click at one time then just call click event and when we click double then 
// single click and double click event both are execute but single click execute two times

button.ondblclick = () =>
{
    console.log("btn wass click 2 time");
    let a = 25;
    a++;
    console.log(a);
}




let div = document.querySelectorAll(".box");

div[0].onmouseover = (evt) => 
{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    console.log("you are inside div index 0");
}


div[1].onmouseover = (evt) => 
{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    console.log("you are inside div index 1");
}


// Event Listeners(it is used for multiple events at a time)
// node.addEventListener(event,callback)

div[1].addEventListener("mouseover",(evt) =>
{
    console.log("hello bro");
});

div[1].addEventListener("mouseover",(evt) =>
{
    console.log("hello bro");
});

div[1].addEventListener("mouseover",(evt) =>
{
    console.log("hello bro");
});

div[1].addEventListener("mouseover",(evt) =>
{
    console.log("hello");
});



// node.removeEventListener(event,callback)
// *Note: the callback reference should be same to remove

// we can't delete like this becouse its make another memory location
div[1].removeEventListener("mouseover",(evt) =>
{
    console.log("hello");
});



// for delete event we need to first we creat a aero function with let variable and 
// then we use this variable for addEventListener bc this type of listener we can easily 
// get delete

let div1L5 = (evt) => 
{
    console.log("we can easily delete this function of event");
}

div[1].addEventListener("mouseover",div1L5);

div[1].removeEventListener("mouseover",div1L5);



// Let's Practice
// Qno1: Creat a toggle button that changes the screen to dark-mode when clicked and
// light-mode when click again.


let mode = "light";

div[1].addEventListener("click", (evt) =>
{
    if(mode==="light")
    {
        mode = "dark";
        console.log("dark");
        document.querySelector("body").style.backgroundColor = "black";
    }
    else
    {
        mode = "light";
        console.log("light");
        document.querySelector("body").style.backgroundColor = "white";

    }
});


div[1].addEventListener("click", (evt) =>
{
    var btn = document.createElement("button");
    btn.innerHTML = "<i>Hi, i am here!</i>";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    document.querySelector("body").prepend(btn);
    stateh1 = true;
});


let stateh1 = false;
div[1].addEventListener("click", (evt) =>
{
    var btn = document.createElement("button");
    btn.innerHTML = "<i>Contact us!</i>";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    document.querySelector("body").prepend(btn);
    stateh1 = true;
});


div[1].addEventListener("click", (evt) =>
{
    var btn = document.createElement("h1");
    btn.innerHTML = "<i>Contact us!</i>";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    document.querySelector("body").prepend(btn);
    stateh1 = true;
});




let newheading = (evt) => 
{
    console.log("we can easily delete this function of event");
}

// btn.addEventListener("mouseover".newheading);  we can't define like a that of inherit event

if(stateh1)// we can define like a that of inherit event but this can't work i don't know why
{

    document.querySelector("button").addEventListener("mouseover".newheading);

}


// previous rewise one 

let button11 = document.createElement("button");
button11.innerText = "Click Me!";
button11.style.color = "white";
button11.style.backgroundColor = "green";

let button12 = document.createElement("button");
button12.innerText = "Click Me!";
button12.style.color = "white";
button12.style.backgroundColor = "green";

let boxs = document.querySelectorAll(".box");

boxs[0].before(button11);
// boxs[0].prepend(button); its not possible we can't do that
boxs[1].after(button12);

// document.querySelector("h2").after(button); its also not possible we 
// can past button only one time in all body


