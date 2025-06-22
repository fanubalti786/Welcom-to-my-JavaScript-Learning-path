// JavaScript Async Callbacks – Full Notes (Error-Free Version)

// 1. What is a Callback?
function greet(name, callback) {
  callback(name);
}
function sayHello(n) {
  console.log("Hello " + n);
}
greet("Irfan", sayHello); // Output: Hello Irfan

// 2. Types of Callbacks

// Synchronous Callback
[1, 2, 3].forEach(function (num) {
  console.log(num); // Runs immediately
});

// Asynchronous Callback
setTimeout(() => {
  console.log("This is async");
}, 1000);

// 3. Callback Hell Example
function step1(cb) {
  setTimeout(() => {
    console.log("Step 1 done");
    cb();
  }, 1000);
}
function step2(cb) {
  setTimeout(() => {
    console.log("Step 2 done");
    cb();
  }, 1000);
}
function step3(cb) {
  setTimeout(() => {
    console.log("Step 3 done");
    cb();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps done");
    });
  });
});

// 4. Real Callback Hell Example: User Signup Validation

function validateUsername(username, callback) {
  setTimeout(() => {
    if (username === "irfan123") {
      console.log("Username taken");
    } else {
      console.log("Username OK");
      callback(username);
    }
  }, 1000);
}

function validateEmail(username, callback) {
  const email = "user@example.com";
  setTimeout(() => {
    if (!email.includes("@")) {
      console.log("Invalid email");
    } else {
      console.log("Email OK");
      callback(username, email);
    }
  }, 1000);
}

function validatePassword(username, email, callback) {
  const password = "secret123";
  setTimeout(() => {
    if (password.length < 6) {
      console.log("Weak password");
    } else {
      console.log("Password OK");
      callback(username, email, password);
    }
  }, 1000);
}

function registerUser(username) {
  validateUsername(username, function (u) {
    validateEmail(u, function (u, e) {
      validatePassword(u, e, function (u, e, p) {
        console.log("Registration successful");
      });
    });
  });
}

registerUser("irfan786");

// 5. fetch() is also Async

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => {
    console.log("Data received:", data);
  });

console.log("Runs before API data");

// 6. Callback Outside setTimeout – Wrong Example

function badValidateUsername(username, callback) {
  setTimeout(() => {
    console.log("Checking username...");
  }, 1000);

  callback(username); // This runs immediately – not correct
}

// 7. Corrected Version
function goodValidateUsername(username, callback) {
  setTimeout(() => {
    console.log("Username OK");
    callback(username); // This waits
  }, 1000);
}
 