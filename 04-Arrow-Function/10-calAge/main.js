/*

วันที่ 1 เดือน 1 ปี 1993 ถึง วันที่ 31 เดือน 12 ปี 2020

const HOUR_IN_DAY = 24;
const MIN_IN_HOUR = 60;
const SEC_IN_MIN = 60;

*/

let startDate = new Date("1/1/1993");
let endDate = new Date("12/31/2020");

let millisecondInDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds

const diffDays = (startDate, endDate) => {
    return Number((endDate - startDate) / millisecondInDay); 
}

console.log(diffDays(startDate, endDate))






