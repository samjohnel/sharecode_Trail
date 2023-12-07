const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/subfolder/first.txt', 'utf8');
writeFileSync('./content/subfolder/second.txt', 'Hello Top gggggggg g');
writeFileSync('./content/subfolder/first.txt', 'Let"s do the hard work', {flag: 'a'})

console.log(first);