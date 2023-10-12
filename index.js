const express = require("express");
const mongo = require('./connect');
const dotenv = require("dotenv");
const employeeRouter = require('./router/employee');

dotenv.config();
const app = express();
app.use(express.json());

mongo.connect();

app.use('/', (req, res, next) => {
    console.log(" Middleware");
    
    next();
});


app.use('/employee', employeeRouter);



app.listen(process.env.PORT);