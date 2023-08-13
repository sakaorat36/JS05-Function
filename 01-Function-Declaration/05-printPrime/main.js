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


// prime number => boolean ใช้ return แทน break
function isPrime(num) {
    for (let d = 2; d < num; d++) {
        // console.log(d);
        if (num % d == 0) {
            return false;
        }
    }

    return true;
}

function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        if (isPrime(n)) {
            console.log(n);
        }
    }
}

printPrime(50);

