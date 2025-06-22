// Example demonstrating sync vs async behavior with I/O-bound and CPU-bound tasks

console.log("HI");


// I/O-bound async task (setTimeout schedules this function to run after 1.5 seconds)
function timeout()
{
  console.log("click the button!");
}

setTimeout(timeout,1500);

let c = 0;

for(i=0; i<20; i++)
{
  c++;
}

console.log(c);


// what's the output
/*
  option1
  Hi
  click the button
  vlue of c 20


  option2 
  Hi
  value of c 20
  click the button


  Explanation:
console.log("HI") and the for-loop run immediately (synchronous, CPU-bound).
setTimeout` schedules `timeout()` to run after 1.5 seconds.
Since the event loop waits for the call stack to clear, the async callback (`timeout()`) is executed after all synchronous code is done.
*/