const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//Connecting to Data Base
db_Connect = mongoose.connect(process.env.DB_CONNECT,
        { useUnifiedTopology: true, useNewUrlParser: true })
        .then(res => console.log('Connected to DataBase'))
        .catch(err => console.log(err))

module.exports.db_Connect = db_Connect;







