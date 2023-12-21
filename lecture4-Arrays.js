//ARRAYS: COLLECTION OF SAME ITEM MEANS SAME DATA TYPES
// FOR EXAMPLE BASIC ARRAY:
let heroes = ["irfan", "mumtaz", "sohail", "arif"];
console.log(heroes);
let age = [55, 89, 22, 44, 99];
console.log(age);

// we can store multiple data in array according to javaScript
let info = ["sohial", 22, "islamabad"];
console.log(info); // array give us value with its length by default
console.log(info.length); // we can achieve array length separately its a array property

// we can print single value of array
console.log(heroes[0]);
console.log(heroes[1]);
console.log(heroes[2]);
console.log(heroes[3]);

// we can change value on single index and array is a mutable and string is immutable we know in past lectures
heroes[0]="sohail";
console.log(heroes[0]);
heroes[3]="azam";
console.log(heroes[3]);


//looping over on array

// array initialization with for loop
for(let idx=0; idx<heroes.length; idx++)
{
    console.log(heroes[idx]);// standard approach
}


for(let idx=1; idx<=heroes.length; idx++)
{
    console.log(heroes[idx-1]);// thats not a standard approach
}

let count=0;
// we can use for of and for in also in array but we prefer for in only bc in provide values which store on key
// but in array we can say the key = index 
for(let i of age)
{
    count++;
    console.log(count, i);// gives only value of array but we can access index explicitely

}

for(let i in heroes)
{
    console.log(i); // it give us only idexes of array bc in provide only keys so inwhich array keys are lk indexes

}

for(let i of heroes)
{
    console.log(i.toUpperCase());// we can use methods of array also
}

// LETS PRACTICE
// Qn: for a given array with marks of student -> [33,99,66,33,99,44] 
// find the average marks of entire class

let s_marks = [10,20,30,40,50];
let sum=0;
for(let mrks of s_marks)// the let mrks is not actually original index so when we change or update array then that change
//  only we can access original array index we cann't acces change value from this mrks;//imp 
{
    sum += mrks;
}
console.log(`Average marks of class is : ${sum/s_marks.length}`);


// Qn: for given array with price of 5 items -> [33,74,9394,744,22] all items have on offer 10% OFF on them.
// change the array to store final price after applying offer;

let price = [250,645,300,900,50];

for(let i = 0; i<price.length; i++)
{
    console.log(`Price Before _10per Off = ${price[i]} `)
    let _10per = price[i] / 10;
    price[i] -= _10per;
    console.log(`Price After _10per Off  = ${price[i]}`);
}

console.log(`All values of array with _10per are = ${price}`);


//Array Methods: these methods are mutable in some case 
//and also immutable in some case all methods start with small letters

// we can change and x change array easily
// 1. push() add to end
// 2. pop() delete from & return
// 3. toString() we can change array into string using this method
// 4. concate() joins multiple arrays and returns result
// 5. unshift() add to start
// 6. shift() delete from start & return
// 7. slice() returns piece of the array
// 8. splice() change original array(add,remove,replace)


// 1. push()
let foods = ["baryani", "checken", "kabab", "tikka"];
console.log(foods);
foods.push("fish", "beaf");
console.log(foods);

// 2. pop()

let deletItem = foods.pop()
console.log(foods);
console.log("delete item is = ", deletItem);


// 3. toString()
console.log(foods);
console.log(foods.toString()); //the original array can't change according to this method


// 4. concate()
let pk_players = ["shoib", "afridi", "babar", "amir"];
let ind_players = ["kholi", "dhoni", "bhumra", "rohit"];

let united_players = pk_players.concat(ind_players);
console.log("all players of united : " ,united_players);


// 5. unshift

pk_players.unshift("fanu");
console.log(pk_players);

let del_player1 = pk_players.shift("fanu");
console.log(pk_players);


// 6. slice()

// slice with array values 
let sample_players = pk_players.slice(1, 3); //origin will not change gotit
console.log(sample_players);

sample_players = pk_players.slice(3); // its means slice first values and show 
//all remaining actually its a one to one  slice
console.log(sample_players);

sample_players = pk_players.slice();// its means inwhich no slice return all values without slice
console.log(sample_players);


// slice with array index
let update_nam = pk_players[0].slice(1,3);
console.log(update_nam);


// 7. splice()(addstart,remove,replace)

let rollno = [1,2,3,4,5,6,7];
console.log(rollno);

//just add 
rollno.splice(2,0,101);
console.log(rollno);

//just remove
rollno.splice(2,1);
console.log(rollno);

//just replcace value of endex 2 from 8
rollno.splice(2,1,8);
console.log(rollno);


// inthis condition splice behave like a opposite of slice
rollno.splice(4);// inwhich all 4 to 6 indexes values are deleted first four 
//values remaining which is according to index(0,1,2,3)
console.log(rollno);


sample_players = pk_players.slice(3); //inwhich all first 3 values which means indexes(0,1,2) will be deleted 
//and remaining after values according to array
console.log(sample_players);

//Let's practise 
// Qn: Create an array to store companies -> "Bloomberg", "microsoft", "uber", "Google", "Ibm", "Netflix"
// a. remove the first companay from the array
// b. remove Uber & add Oia in its place 
// c. Add Amazone add the end

let companies = ["Bloomber", "microsoft", "uber", "Google", "Ibm", "Netflix"];

// Ans a) for this answer we can use multiple methods which is according to shift and splice

// according to shift
console.log(companies);
let del_val = companies.shift();
console.log(companies);
console.log(del_val);

// according to splice
// companies.splice(1,1);
// console.log(companies);

// Ans b) 
companies.splice(1,1,"Ola");
console.log(companies);


// Ans c) 
companies.splice(5,0,"Amazone");
console.log(companies);

// companies.push("Amazone");
// console.log(companies);


//jhjjjj























