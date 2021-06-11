const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Add Employee"
    });
});

module.exports = router;