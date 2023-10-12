const express = require("express");
const router = express.Router();
const employeeModule = require("../module/employee");

router.get('/get', employeeModule.getEmployees);

router.post('/create', employeeModule.createEmployees);

router.put('/update/:employeeId', employeeModule.updateEmployees);

router.delete('/delete/:employeeId', employeeModule.deleteEmployees);

module.exports = router;