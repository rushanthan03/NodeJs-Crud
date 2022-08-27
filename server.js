const express =require('express');
const http = require('http');
const appconfig= require('./app.js')
const port = 3000;
let app = express();

const server = http.createServer(app);
appconfig(app);
server.listen(port, ()=>{
    console.log("server is listening on port 3000");
});