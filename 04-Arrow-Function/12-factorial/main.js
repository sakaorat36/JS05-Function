const factorial = (number) => {

    let result = number
    
    if (number == 0 || number == 1) {
        result = 1
    } else {
        while (number > 1) {
            number--
            result = result * number
        }
    }

    return result
}

console.log(factorial(5))