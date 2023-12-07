const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);

const relativePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(relativePath)