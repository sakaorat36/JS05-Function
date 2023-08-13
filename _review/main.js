/*
### การเขียนฟังก์ชันมี 2 แบบหลักๆ
1. Function Declaration / Named Function
2. Function Expression / มักจะถูกเขียนในรูปของ Anonymous Function
*/

/*
การใช้งานฟังก์ชันต้อง
1.ประกาศฟังก์ชัน => กำหนดชื่อ, input
2.เรียกใช้งาน
*/

// 1 Define
function sayHi (name, lastname) {
    console.log(`Hello ${name} ${lastname}`);   
}

// 2 Call
sayHi('John', 'Doe'); 
sayHi('Ploy', 'Sakaorat');

// RETURN VALUE ผลลัพธ์ที่ได้จากการ run function จนเสร็จ
// add(5,6) == Return Value, FN Result ในรูป FN()

function add(x,y) {
    // 0 sec.
    let result = x + y;

    // 5 sec.
    return result;
}

console.log(11 === add(5,6)); // DONE : add(5,6) === result ==== 11

let r = add(5,6); // reuseable result
console.log(r);
console.log(r);

console.log(add(5,6)); // one time use
console.log(add(5,6)); // one time use


function isEven (n) {
    // if (n % 2 == 0) {
    //     return true;
    // } else {
    //     console.log("I'm done");
    //     return false;
    // }
    // if (n % 2 == 0) {
    //     return true;
    // }
    // return false;
    return n % 2 == 0;
    // return expression
    // return 6 % 2 === 0 (true)
    // return 5 % 2 === 0 (false)
}

console.log(isEven(6)); // true
console.log(isEven(5)); // false

// CheckPoint
// - Declare : ประกาศเป็น
// - Params : รับ input
// - Return : เข้าใจเรื่อง Return
// - Call : run function

// #### FN EXPRESSION

let a = 5 * 2 + 7;
// variable = expression
/*
expression = สิ่งสามารถ evaluate เป็น single value ได้
- single value : 7
- combine expression : 7 + 2
- FN result : add(7,2)
*/

let myFunc = add;
let z = console.log;
// FORMAT : variable = FN (FN Expression)
// FN Expression : การ assign FN  ให้กับ variable

console.log(myFunc(5, 2));
z('Hi'); // z = console.log;



// Anonymous FN 


// SYNTEX : FN EXPRESSION
// อธิบาย : กำลัง assign Anonymous fn ให้กับตัวแปล sayHello

const sayHello = function (name) {
    console.log('Hi ' + name);
};

sayHello('Expression');


// 1. function add () {}
// 2A. let add = function () {}
// 2B. let add = () => {}


// const minus = (a, b) => {
//     return a - b;
// };

const minus = (a, b) => a - b;
const minusTwo = a => a - 2;
const two = 2;

console.log(minusTwo);
console.log(two());
