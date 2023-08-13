// {
// function sayHi(age) {
//     if (age < 12) alert("Hi kid");
//   }
// //   console.log(sayHi); 
// // * ไม่ทำงาน เพราะ ไม่มี ()

// //   console.log(sayHi(10)); 
// // ** ทำงาน เพราะ age < 12 และ alert Hi kid
// }

function sayHi(name) {
    if (name) {
      alert("Hi " + name);
      return;
    } else {
      return "Who are you";
    }
  }
//   console.log(sayHi("John")); 
  // *** show Hi John

//   console.log(sayHi()); 
  // **** show Who are you
