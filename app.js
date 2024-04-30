const express = require('express')
const app = express()
const studentRoute = require('./router/student')
const facultyRoute = require('./router/faculty')


app.use('/student',studentRoute)
app.use('/faculty',facultyRoute)


module.exports = app