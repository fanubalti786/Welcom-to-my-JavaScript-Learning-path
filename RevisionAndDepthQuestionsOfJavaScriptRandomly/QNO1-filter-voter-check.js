// QNo1: Create a funciton that takes array of objects as input and return the users 
// whose age>18 and are male

// Solution with filter array:
let voter;
let info = [
    { Name: "irfan", age: 24, gender: "male" },
    { Name: "mumtaz", age: 15, gender: "male" },
    { Name: "sohail", age: 20, gender: "female" },
    { Name: "liaqat", age: 32, gender: "male" }
];

function canvote(info){
    voter = info
            .filter(item => item.age > 18 && item.gender === "male").length
            // .map(item => item.Name).length;
        
    return voter;
}

const solve = (info) => {
    let arr = [];
    for(let i=0; i<info.length; i++)
    {
        if(info[i].age > 18 && info[i].gender === "male")
        {
            arr.push(info[0]);
        }
    }

    // arr.map(item => arr.Name);
    return arr;
}

console.log(canvote(info));
console.log(solve(info));