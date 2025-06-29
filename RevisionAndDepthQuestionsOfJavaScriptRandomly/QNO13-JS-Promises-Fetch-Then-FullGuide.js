// ✅ JavaScript Promises, fetch(), and then() – Full Deep Notes (Error-Free)

// --------------------------------------
// 1. What is a Promise?
// --------------------------------------
// A Promise represents a future value (async result)

const myPromise = new Promise((resolve, reject) => {
  const success = true; // try false also
  if (success) {
    resolve("✅ Success Result");
  } else {
    reject("❌ Failure Error");
  }
});

myPromise
  .then(result => console.log("Resolved:", result))
  .catch(error => console.log("Rejected:", error));


// --------------------------------------
// 2. Chaining Promises with then()
// --------------------------------------

Promise.resolve(5)
  .then(num => {
    console.log("Step 1:", num); // 5
    return num * 2;
  })
  .then(result => {
    console.log("Step 2:", result); // 10
    return result - 3;
  })
  .then(final => {
    console.log("Step 3:", final); // 7
  });


// --------------------------------------
// 3. What does .then(callback) mean?
// --------------------------------------
// The callback gets the resolved value of previous promise
// Example:
function processData(data) {
  console.log("Processed:", data);
  return data + "✅";
}

Promise.resolve("Data")
  .then(processData) // same as .then(data => processData(data))
  .then(final => console.log("Final:", final));


// --------------------------------------
// 4. fetch() – Real API, real async
// --------------------------------------
function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json()); // res.json() also returns a Promise
}

function processPost(post) {
  console.log("Title:", post.title);
  return { ...post, title: post.title.toUpperCase() };
}

function displayPost(post) {
  console.log("Modified Post:", post.title);
}

getData()
  .then(processPost)
  .then(displayPost)
  .catch(err => console.log("Error:", err));


// --------------------------------------
// 5. Why return is important in .then()
// --------------------------------------
// If you don’t return, next .then receives undefined

Promise.resolve("irfan")
  .then(name => {
    // return is important
    return name.toUpperCase();
  })
  .then(upper => {
    console.log("Uppercased:", upper); // IRFAN
  });

// Without return:
Promise.resolve("irfan")
  .then(name => {
    name.toUpperCase(); // no return
  })
  .then(result => {
    console.log("Missing return:", result); // undefined
  });


// --------------------------------------
// 6. res.json() explanation
// --------------------------------------
// - res.json() is a method on the Response object
// - It converts response body into usable JSON
// - It returns a Promise

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json()) // This returns a Promise
  .then(user => console.log("User Name:", user.name));


// --------------------------------------
// 7. Summary Notes (no code)
// --------------------------------------
/*
- ✅ `then(value => ...)` receives the resolved value of previous Promise
- ✅ You must `return` from a then() if you want to pass to next .then()
- ❌ If you skip return, next then gets `undefined`
- ✅ fetch() returns a Promise<Response>
- ✅ res.json() returns a Promise<parsed JSON object>
- ✅ Chaining works because each then() returns a new Promise
- ✅ Short form `.then(func)` is same as `.then(val => func(val))`
- ✅ .catch() handles any rejection in the chain
*/
v