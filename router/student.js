const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Student = require('../model/student')

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
    const newStudent = new Student({
        _id:new mongoose.Types.ObjectId,
        mhyme:req.body.name,
        phone:req.body.phone,
        add:req.body.add,
        batch:req.body.batch,
        reggNo:req.body.reggNo
    })

    newStudent.save()
    .then(result=>{
       console.log(result) 
       res.status(200).json({
        new_student:result
       })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})



module.exports = router