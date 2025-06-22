// QNo2: Sync vs async 

const fs = require("fs")

// readFileSync is synchronous – it blocks execution until the file is fully read.
// So console.log runs after and prints the correct content.
const content1 = fs.readFileSync("file1.txt", "utf-8");
console.log(content1);

// readFile is asynchronous – it doesn't wait for the file to load.
// So console.log runs before the file is ready, resulting in undefined or unexpected output.

// const content = fs.readFile("file1.txt", "utf-8");
// console.log(content); // Incorrect output


// Asynchronously reads the file. The callback runs only after the file is fully read.
// This prevents blocking the program while the file is loading.
fs.readFile("file1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error:", err); // Logs any error that occurs during reading
  } else {
    console.log("File Content:", data); // Logs the content once the file is read
  }
});