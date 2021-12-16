const express =require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const helmet = require('helmet')

dotenv.config()

mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connected to DB.");
});

//middlewares.
app.use(express.json()) //body-parser for post requests.
app.use(helmet())
app.use(morgan('common'))

app.listen(port,()=>{
    console.log("Backend Server Started");
})