// ใช้ if แต่ห้ามใช้ else
function checkAge(age) {
    if (age > 18) {
      return true;
    } 
    
    if (age <= 18) {
      return confirm("Did parents allow you?");
    }

  }

// ใช้ ? แทน if
function checkAge(age) {
    return age <= 18 ? true :  "Did parents allow you?"
}

// ใช้ || แทน if




 
