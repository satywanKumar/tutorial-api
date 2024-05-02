const mongoose = require('mongoose')
StudentShema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:String,
    phone:String,
    add:String,
    batch:String,
    reggNo:Number
})

module.exports = mongoose.model('Student',StudentShema)