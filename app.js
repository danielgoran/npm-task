/* ===== Exercise ===== */
/* 1. Install the package "password-generator"
   2. Generate a password:
        - length: 20 characters;
        - non-memorable;
        - starts with 'nice-pass-' */


let passwordGenerator = require('password-generator');

let password = passwordGenerator(20, false, '', 'nice-pass-');

console.log('Your password: ' + password);