let x = 1;
function func() {
  console.log(x); // * ไม่ทำงานเพราะประกาศตัวแปรตัวเดียวกันแต่คนละค่า
  let x = 2;
}
func();