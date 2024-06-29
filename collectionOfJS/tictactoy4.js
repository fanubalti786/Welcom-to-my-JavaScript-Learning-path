let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".new-btn1");
let hide = document.querySelector(".hide");

let turnO = true;//turnX,turn0

const winPatterns = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,5,10,15],
    [3,6,9,12],
];

let showWinner = (Winner) => 
{
    // msgContainer.innerText = `Congradulation, Winner is ${Winner}`;
    // msgContainer.style.background = "green";
    msg.style.color = "rgb(34 217 10)";
    msg.innerHTML = `<p>Congratulations to the winner : <strong>${Winner}</strong></p>`;
    if(Winner === "O")
    {
        msg.children[0].children[0].style.color = "rgb(113, 26, 26)";
    }

    else 
    {
        msg.children[0].children[0].style.color = "black";
    }
    msgContainer.classList.remove("hide");
    disableBox();
    count = -1;
    // msg.style.color = "black";
    //  msg.children[0].children[0].style.color = "white";
}


let gameDraw = () => 
{
    msg.style.color = "red";
    msg.innerHTML = "<p>Draw! Both teams excelled</p>";
    msgContainer.classList.remove("hide");
    // disableBox();
    // msg.style.color = "black";
    //  msg.children[0].children[0].style.color = "white";
}

let disableBox = () =>
{
    boxes.forEach((val) =>
    {
        val.disabled = true;
    });

    // hide.style.display = "ture";


}

let ableBox = () =>
{
    boxes.forEach((box) =>
    {
        box.disabled = false;
        box.innerText = "";
    });

    // hide.style.display = "ture";


}


let resetGame = () =>
{
    turnO = true;
    ableBox();
    msgContainer.classList.add("hide");
    count = 0;


}


boxes.forEach((box) =>
{
    box.addEventListener("click",()=>
    {
        console.log("box was clicked");
        if(turnO)
        {
        box.innerText = "O";
        box.style.color = "#b0413e";
        turnO = false;
        }
        else
        {
            box.innerText = "X";
            box.style.color = "black";
            turnO = true;
        }

        box.disabled = true;
        checkWinner();
    });

});

let count = 0;
const checkWinner = () =>
{
    for(let patterns of winPatterns)
    {
        console.log(patterns[0],patterns[1],patterns[2],patterns[3]);
        console.log(boxes[patterns[0]].innerText,
        boxes[patterns[1]].innerText,
        boxes[patterns[2]].innerText,
        boxes[patterns[3]].innerText,
        );

        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;
        let pos4 = boxes[patterns[3]].innerText;

        

        if(pos1 != "" && pos2 != "" && pos3 != "" && pos4 !="")
        {
            if(pos1 == pos2 && pos2 == pos3 && pos3 == pos4)
            {
                console.log("Winner");
                showWinner(pos1);
            }

        }

    }
    count++;
    console.log(count);
    if(count==16)
    {
        gameDraw();
        count = 0;
    }
}


// console.log(count);
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


