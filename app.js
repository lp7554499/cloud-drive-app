const express = require('express')
const app = express()
const port = 3000
const userRoutes = require('./routes/userRoutes')
const { body, validationResult } = require('express-validator');
const dotenv = require('dotenv')
dotenv.config()

const dbConnect = require('./config/db')
dbConnect()


app.set('view engine','ejs')

//this are middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/user',userRoutes)


app.listen(port,()=>{
    console.log("server is running")
})