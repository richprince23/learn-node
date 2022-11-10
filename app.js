const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {
 if (req.url === '/') {
   res.end('Welcome to our home page');
 }
 if (req.url === '/home') {
    // res.end(index.html);
  }
});

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
server.listen(3000);