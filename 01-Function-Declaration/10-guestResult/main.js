function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); 
// * undefined เป็นค่า function sayHi

console.log(sayHi(10)); 
// ** undefined เป็นค่าที่ console.log (sayHi) 