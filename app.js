const express = require('express');
const exphbs = require('express-handlebars');
const db_Connect = require('./Models/db');
// const employee = require('./Models/employee.model');
const path = require('path');

//Initializing Express
const app = express();

//Initializing Handlebars
app.set('views', path.join(__dirname, '/Views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/Views/layouts/' }));
app.set('view engine', 'hbs');

const employeeController = require('./Controllers/employeeController');

//Middleware
app.use('/employee', employeeController);




app.listen(3000, () => {
    console.log('Server is up on Port 3000');
});