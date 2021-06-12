const mongoose = require('mongoose');

//Connecting to Data Base
const db_Connect=mongoose.connect('mongodb+srv://VED:g2pS5VgEJvkF@cluster0.s6iye.mongodb.net/EmployeeDB?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true })
    .then(res => console.log('Connected to DataBase'))
    .catch(err => console.log(err))


module.exports=db_Connect;
