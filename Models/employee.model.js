const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        min: 6
    },
    email: {
        type: String,
        required:true,
        min:6
    },
    mobile:{
        type:Number,
        required:true,
        length:10
    },
    city:{
        type:String,
        required:true,
        min:4
    }
});

module.exports=mongoose.model('Employee',employeeSchema);