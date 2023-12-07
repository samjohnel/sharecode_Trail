const { log } = require('console');
const {readFile, writeFile} = require('fs');
readFile('./content/subfolder/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    } 
        const first = result;
    readFile('./content/subfolder/second.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
        const second = result;
    writeFile('./content/subfolder/third.txt', `The result is ${first}, ${second}`, (err, result) => {
    if(err) {
        console.log(err);
        return ;
    }
   
        // result = (`The result is ${first} ${second}`);
        console.log(result);

    readFile('./content/subfolder/third.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
            console.log(result);
    })
   
}) 
    
})
    
})