const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//Connecting to Data Base
<<<<<<< HEAD

db_Connect = mongoose.connect(process.env.DB_CONNECT,
        { useUnifiedTopology: true, useNewUrlParser: true })
        .then(res => console.log('Connected to DataBase'))
        .catch(err => console.log(err))

module.exports.db_Connect = db_Connect;








=======
const db_Connect=mongoose.connect('mongodb+srv://VED:g2pS5VgEJvkF@cluster0.s6iye.mongodb.net/EmployeeDB?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true })
    .then(res => console.log('Connected to DataBase'))
    .catch(err => console.log(err))


module.exports=db_Connect;
>>>>>>> 22979a5f40855356df0eb4c416c8c3eb2261ef25
