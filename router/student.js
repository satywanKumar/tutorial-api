const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({
        message:"this is student data"
    })
})

router.get('/getAll',(req,res)=>{
    res.status(200).json({
        message:'this is all student data',
        data:[
            {id:1,name:'satywan'},
            {id:2,name:'aman'}
        ]
    })
})

router.post('/',(req,res)=>{
    console.log("post new data request")
})



module.exports = router