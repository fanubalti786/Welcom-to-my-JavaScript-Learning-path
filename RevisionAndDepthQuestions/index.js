// QNo1: Create a funciton that takes array of objects as input and return the users 
// whose age>18 and are male

// Solution:
let voter;
let info = [
    { Name: "irfan", age: 24, gender: "male" },
    { Name: "mumtaz", age: 15, gender: "male" },
    { Name: "sohail", age: 20, gender: "female" },
    { Name: "liaqat", age: 32, gender: "male" }
];

function canvote(info){
    voter = info
            .filter(item => item.age > 18 && item.gender === "male")
            .map(item => item.Name).length;
        
    return voter;
}

console.log(canvote(info))