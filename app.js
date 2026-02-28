const express = require('express')
const app = express()
const port = 3000
const userRoutes = require('./routes/userRoutes')
const homeRoutes = require('./routes/homeRoutes')
const { body, validationResult } = require('express-validator');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config()

const dbConnect = require('./config/db')
dbConnect()


app.set('view engine','ejs')
app.use(cookieParser())

//this are middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/',homeRoutes)
app.use('/user',userRoutes)


app.listen(port,()=>{
    console.log("server is running")
})