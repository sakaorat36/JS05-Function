function max(a, b, c, d) {

    let maxValue = a

    if (a == null && b == null && c == null && d == null) {
        return undefined
    } else if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        return NaN
    } else {

        if (b > maxValue) {
            maxValue = b
        }

        if (c > maxValue) {
            maxValue = c
        }

        if (d > maxValue) {
            maxValue = d
        }

        return maxValue
    }

}

console.log(max(7, 3, 9, 2))