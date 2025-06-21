// Functional arguments
// Passing a function to another function


function sum (a,b)
{
  return a + b;
}
function doOperation(a,b,op) 
{
  return op(a,b);
}

const total = doOperation(1, 2, sum);
console.log(total);