const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    console.log("faculty get request")
})

router.get('/getAll',(req,res)=>{
    console.log("get all faculty request")
})

router.post('/',(req,res)=>{
    console.log("post new data request")
})


module.exports = router