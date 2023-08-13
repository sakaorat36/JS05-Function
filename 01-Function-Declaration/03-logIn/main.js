// Define
function login (username, password) {

    if (username === 'admin' && password === 'P@ssw0rd') {
        alert('login สำเร็จ');
    } else ('login ไม่สำเร็จ');
}
let username = prompt ('enter username');
let password = prompt ('enter password');
// call
login (username, password);