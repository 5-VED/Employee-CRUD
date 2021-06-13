const express = require('express');
const exphbs = require('express-handlebars');
require('./Models/db');
// const employee = require('./Models/employee.model');
const path = require('path');

//Initializing Express
const app = express();

//Parsing the json 
app.use(express.json());

//Initializing Handlebars
app.set('views', path.join(__dirname, '/Views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/Views/layouts/' }));
app.set('view engine', 'hbs');

const employeeController = require('./Controllers/employeeController');
const registerEmployee = require('./Controllers/employeeController');
//Middleware
app.use('/employee', employeeController);
app.use('/employee/register',registerEmployee);




app.listen(3000, () => {
    console.log('Server is up on Port 3000');
});