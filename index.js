const express = require('express');
require('dotenv/config')
const mongoose = require('mongoose');
const studentRoute = require('./src/API/Student')
require('./src/Database')
const app = express();
const port = process.env.PORT


//Parsing data from Body
app.use(express.json())


//Import Routes
app.use('/api', studentRoute);

app.all('**', (req, res) => {
    res.status(404).json({
        message: "Invalid Route",
        status: 404

    })

})


//Server Listening  
app.listen(port);