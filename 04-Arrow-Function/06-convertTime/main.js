// 1day
// 1day=24hours
// 1hour=60minutes
// 1minutes=60second

const convertDayToSecond = (day) => {
    
    let hoursInOneDay = 24;
    let minutesInOneHour = 60;
    let secondInOneMinutes = 60;
    let secondInDay = day * hoursInOneDay * minutesInOneHour *secondInOneMinutes
    
    return secondInDay +" "+ "seconds";  
} 

console.log(convertDayToSecond(1)) // 86400 seconds


// ABSTRACTION
// คิดก่อนว่าอะไรต้องเป็น input

// DAY => SEC

// 1 DAY = 24HR * 60 MIN + 60 SEC
// 1 DAY = 24 * 60 * 60
// 2 DAY = 2 * 1 DAY = 2 * 24 * 60 * 60
// 3 DAY = 3 * 24 * 60 * 60

const HOUR_IN_DAY = 24;
const MIN_IN_HOUR = 60;
const SEC_IN_MIN = 60;

const convertDayToSac = (day) => day * HOUR_IN_DAY * MIN_IN_HOUR * SEC_IN_MIN

console.log(convertDayToSac(1));
