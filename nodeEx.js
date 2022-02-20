// const amount = 2;
// if(amount < 10) {
//     console.log('small number');
// } else {
//     console.log('large number');
// }

// console.log("Hello World, I am doing Node stuff");

// __dirname - path to current directory
// __filename - file name
// require - function to use modules
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__filename)
// setInterval(() => {
//     console.log('hello N8');
// }, 10000);

const names = require('./names');
const sayHi = require('./modules');
require('./mindmelt');
// setInterval(() => {
//     sayHi(names.nate);
//     sayHi('N8theGr8');
// }, 1000);

const os = require('os');

const user = os.userInfo();


console.log(`Time of system is ${os.uptime()} seconds!`);

// HTTP basic

const http = require('http');

const server = http.createServer((req, res) => {
    
    if(req.url === '/') {
        
        res.end('Home Page')
    }
    if(req.url === '/about') {
       
        res.end('About Page')
    } 
    res.end(`
    <h1> Oh! You done went to the wrong place</h1>
        <a href="/">to the home page</a>
        `)
    
})

server.listen(8888);

//Package-JSON example
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
console.log(items);
const newItems = _.flattenDeep(items);
console.log(newItems);