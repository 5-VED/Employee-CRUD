const express = require('express');
const router = express.Router();
const Employee = require('../Models/employee.model');
const { registerValidation } = require('../validation');

//Rendering Registerion Page
router.get('/', (req, res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Add Employee"
    });
});

//Registering new employee
router.post('/register', async (req, res) => {

    //Validating using joi
    const { error } = registerValidation(req.body);
    for (field in error) {
        switch (field) {
            case req.body.name:
                nameError = registerValidation(req.body.name);
                if (nameError) {
                    res.render("employee/addOrEdit", {
                        name: 'Enter Name Properly'
                    });
                }

            case req.body.email:
                emailError = registerValidation(req.body.email);
                const emailExist = await Employee.findOne({ email: req.body.email });
                if (emailExist) {
                    res.render("employee/addOrEdit", {
                        emailExist: 'Email Already Exist'
                    });
                }
            default:
                break;
        }
    }
    // if (error) {
    //     return res.render("employee/addOrEdit", {
    //         error: error.details[0].message
    //     });
    // }

    // //Checking email exist or not
    // const emailExist = await Employee.findOne({ email: req.body.email });
    // if (emailExist) {
    //     res.render("employee/addOrEdit", {
    //         emailExist: 'Email Already Exist'
    //     });
    // }

    //Creating a new Employee
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        city: req.body.city
    });


    try {
        const savedemployee = await employee.save()
        res.send({ employee: employee._id });
    } catch (err) {
        res.status(400).send(err);
    }
});


module.exports = router;