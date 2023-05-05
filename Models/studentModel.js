const mongoose = require('mongoose')

const StudentModel = mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    mendarId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date
    },
    updatedAt:{
        type:Date,
        default:null
    }
})

module.exports = mongoose.model( "student", StudentModel )
