const mongoose = require('mongoose')

const MendorModel = mongoose.Schema({
    FirstName:{
        type:String,
        // required:true
    },
    LastName:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    password:{
        type:String,
        // required:true
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

module.exports = mongoose.model( "mendor", MendorModel )
