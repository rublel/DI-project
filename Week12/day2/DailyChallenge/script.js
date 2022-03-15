const main = require('./main.js');

//Part 1
const b = 5
main.resultPart1 = main.largeNumber + b
console.log(main.resultPart1);

//Part 2 & 3
const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write('<p>My module is</p><p>' + main.resultPart1 + '</p><h1>Hi there at the frontend</h1>');
    res.write('<h4>The date and time are currently: ' + main.getDateTime() + '</h4>');
    res.end()
}
const server = http.createServer(requestListener);
server.listen(3000, () => {
    console.log('You are running on port: ' + server.address().port);
});

