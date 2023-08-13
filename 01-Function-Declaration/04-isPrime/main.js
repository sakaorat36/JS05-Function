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
