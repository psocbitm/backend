const express =require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const helmet = require('helmet')

dotenv.config()

mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connected to DB.");
});

//middlewares.



app.listen(port,()=>{
    console.log("Backend Server Started");
})