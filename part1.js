console.log("Name: Temirzakhov Adilzhan");
console.log("Group: WRITE-YOUR-GROUP");

document.getElementById("alert-btn").addEventListener("click", function () {
  alert("Hello, JavaScript World!");
});

let userName = "Adilzhan";
let age = 19;
let isStudent = true;

console.log("Variables:", userName, age, isStudent);
console.log("typeof:", typeof userName, typeof age, typeof isStudent);

let a = 10;
let b = 3;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);

let firstName = "Adilzhan";
let lastName = "Temirzakhov";
let fullName = firstName + " " + lastName;
console.log("Full name: " + fullName);
console.log("Hello, " + fullName + "! You are " + age + " years old.");
