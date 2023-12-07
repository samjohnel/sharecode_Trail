const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page");
    }
    else if (req.url === "/about") {
        res.end("Our company was established at 1986");
    } else {
        res.end(`
        <h1> Wrong Selection </h1>
        <p> Go check our home page instead</p>
        <a href="/">Back to our home page </a>
        `);
    }
    
       
    
})


server.listen(4000);