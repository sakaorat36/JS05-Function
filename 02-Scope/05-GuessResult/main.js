let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * จะแสดง Hello everybody
}

logMessage(message);
console.log(message); // ** show Welcome to Thailand
// เพราะใน function ไปเขียนทับ message



let name = "John";

function sayHi(input) {
  console.log(name); // *** John
  name = input;
}

sayHi();
console.log(name); // **** undefined