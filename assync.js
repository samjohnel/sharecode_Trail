const f = require('fs');
const result = f.readFileSync('./content/subfolder/first.txt', 'utf-8');
console.log(result);