const scoreFootball = (a) => {
    
    if (a = 'win') {
        return '3';
    } else if (a = 'draw') {
        return '1';
    } else if (a = 'lost') {
        return '0';
    }
}

console.log(scoreFootball('win')); // 3


// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน
// เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

// Team : ท่าเรือใบสีฟ้า (Man city)
// Total match : 38 [ignore]
// WIN : 28 => 28 * 3 = 84 [significant]
// DRAW : 5 => 5 * 1 = 5 [significant]
// LOSE : 5 => 5 * 0 = 0 [ignore]

// TATAL : 89

// ABSTRACTION
// HIDING COMPLEXITY
// EASY INTEREST

// (WIN, DRAW) => TOTAL

const calMatchPoint = (win, draw) => win * 3 + draw;