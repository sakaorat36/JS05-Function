// test push, feedback branch
// updated solution

// Define
function soundOfBird() {
    // console.log('เสียง นกกรงหัวจุกมันริก');
    // console.log('จก');
    // for (let i = 1; i <= 11; i++)
    // console.log('กวิ๊ก ๆๆๆๆๆๆ');

    // soundOfBird();

    // soundOfBird();

    // soundOfBird();

    function isPrime(n) {
        let n =5;
        let isPrime = true;
        for (let divider = 2; divider < n; divide++) {
            if (n % divider == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(n);

    }
}

isPrime(5);
isPrime(7);
isPrime(13);
isPrime(17);
isPrime(23);




// STAR PATTERN
// dynamics row => 1 for loop
// dynamics col => 1 for loop

// *
// **
// ***
// ****

// Prime Number
// ตัวตั้ง n (fixed)
// ตัวหาร dynamics => 1 LOOP

// n = 5 : 2 3 4
// n = 6 : 2 3 4 5
// n = 7 : 2 3 4 5 6

// let n = 7;
// let isPrime = true;

// for (let divider = 2; divider < n; divider++) {
//     if (n % divider == 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) console.log(n);

// DESIGN FN
// 1-INPUT ? => number ที่ใช้เช็ค
// 2-LOGIC IMPLEMENT ?
// 3-OUTPUT ? => boolean true,false
// number => bool


function checkPrime(num) {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}

// checkPrime(7);
// checkPrime(13);
// checkPrime(61);
// checkPrime(63);
// checkPrime(83);



function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        checkPrime(n);
    }
}
printPrime(71);
// checkPrime(2);
// checkPrime(3);
// checkPrime(4);
// checkPrime(5);
// checkPrime(6);
// checkPrime(7);
// checkPrime(8);
// checkPrime(9);
// checkPrime(10);
// checkPrime(11);
// checkPrime(12);
// checkPrime(13);

// ABSTRACTION
// - simple ideas => one idea
// - hiding complexity
// - simple interaction

function addTwo(n) {
    let result = n + 2;
    // return result;
    console.log('End calc');

}

// let result = addTwo(5);
// console.log(result);

// ###### test return 
// function addTwo(n) {
//     let result = n + 2;
//     return result;
//     console.log('End calc');

// }

// let result = addTwo(5);
// console.log(result);
