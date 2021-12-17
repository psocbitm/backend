const express =require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const helmet = require('helmet')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
dotenv.config()

mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connected to DB.");
});

//middlewares.
app.use(express.json()) //body-parser for post requests.
app.use(helmet())
app.use(morgan('common'))

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)

app.listen(port,()=>{
    console.log("Backend Server Started");
})