// หาร 4 ลงตัว => ture
// 1800 => false
// 1900 => false
// 2000 => ture

// 100 หารลงตัวไม่เป็น Leap year *** ยกเว้นหาร 400 ลงตัวเป็น  Leap year 
//  ที่เหลือ หาร 4 ลงตัว เป็น Leap year 

// 1 Year == 1 รอบของการโคจรรอบดวงอาทิตย์ == 365.242199 days

// 1 Year == 365.00 (เศษ 0.242199)
// 1 Year == 365.00 (เศษ 0.242199)
// 1 Year == 365.00 (เศษ 0.242199)
// 1 Year == 365.00 (เศษ 0.242199) + 1 Day (4*0.242199 == 0.96 เกิน 0.04)

// ชด 25 ครั้ง ==> เกินไป 25 * 0.04 วัน => 1 วัน
// ปีที่ 100 ไม่ควรชด

// YEAR => BOOLEAN
// isLeapYear : Year => BOOLERN
// 4,100,400
// const isLeapYear = (year) => {

    // #1
    // if (year % 4 === 0 && year % 100 != 0) {
    //     return true;
    // } else if (year % 100 === 0 && year % 400 != 0) {
    //     return false;
    // } else if (year % 400 == 0) {
    //     return true;
    // } else {
        // return false;
    // }

    // #2
    // if (year % 400 == 0) {
    //     return true;
    // } else if (year % 100 == 0) {
    //     return false;
    // } else if (year % 4 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    // #3
    // if (year % 400 == 0) {
    //     return true;
    // }
    // if (year % 100 == 0) {
    //     return false;
    // }
    // if (year % 4 == 0) {
    //     return true;
    // } 
    // return false;

    // #4
    // if (year % 100 ===0) {
            // 100, 200, 300, 400,
    //     return year % 400 == 0;
    // }
    // return year % 4 === 0;

    // #5
    // return year % 100 === 0 ? year % 400 == 0 : year % 4 === 0;

// };

// const isLeapYear = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);