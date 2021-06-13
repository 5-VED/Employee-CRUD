//const express = require('express');
const mongoose = require('mongoose');
//const router = express.Router();


const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    email: {
        type: String,
        required: true,
        min: 6
    },
    mobile: {
        type: Number,
        required: true,
        length: 10
    },
    city: {
        type: String,
        required: true,
        min: 4
    }
});

module.exports = mongoose.model('Employee', employeeSchema);
//module.exports = router;
