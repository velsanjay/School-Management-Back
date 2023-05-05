const studentModel = require('../../Models/studentModel');
const EditStudentRouter = require('express').Router();
const AdminModel = require('../../Models/adminModel')
const MendorModel = require('../../Models/mendormodel')


EditStudentRouter.post('/edit', async (req, res) => {
    const { adminId, mendarId, email } = req.body;


    await AdminModel.findOne({ _id: adminId }).then(async() => {
       
        await MendorModel.findOne({_id:mendarId}).then(async()=>{
            
            await studentModel.findOne({email}).then((responce)=>{
                responce.email= email
                responce.save()
                res.status(200).send({
                    success:true,
                    message:"Mendar Changed Successfully!!!",
                    data:responce
                })
            }).catch((error)=>{
                res.status(401).send({
                    success: false,
                    message: "Student Email is Not Valid!!!",
                    error
                })        
            })
        
        
    }).catch((error) => {
        res.status(401).send({
            success: false,
            message: "Mendar Id is Not Valid!!!",
            error
        })
    })
    }).catch((error) => {
        res.status(401).send({
            success: false,
            message: "Admin Only allow the access!!!",
            error
        })
    })
})

module.exports = EditStudentRouter;