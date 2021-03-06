const express = require('express');
const hbs = require('express-handlebars');
const uesrRouter = require('./routes/users');
const server = express();


//Middleware

server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));
server.set('view engine', 'hbs');
server.use(express.urlencoded({ extended: true }));

//Routes 

server.use('/', uesrRouter);

module.exports = server;
