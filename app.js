const express = require('express')
const app = express()
const studentRoute = require('./router/student')
const facultyRoute = require('./router/faculty')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sbs:sbs123@sbs.tqfm7gc.mongodb.net/?retryWrites=true&w=majority&appName=sbs')

mongoose.connection.on('error',err=>{
    console.log('connection fail')
})

mongoose.connection.on('connected',()=>{
    console.log("connected with database")
})


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/student',studentRoute)
app.use('/faculty',facultyRoute)


module.exports = app