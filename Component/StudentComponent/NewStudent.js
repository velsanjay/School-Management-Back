const studentModel = require('../../Models/studentModel');
const NewStudentRouter = require('express').Router();
const AdminModel = require('../../Models/adminModel')
const MendorModel = require('../../Models/mendormodel')


NewStudentRouter.post('/new', async (req, res) => {
    const { adminId, mendarId, FirstName, LastName, email, password, confirmPassword } = req.body;


    await AdminModel.findOne({ _id: adminId }).then(async() => {
       
        await MendorModel.findOne({_id:mendarId}).then(async()=>{
            
        const user = await studentModel.findOne({ email: email }).then().catch(() => {
            res.status(401).send({
                success: false,
                message: "Mendar Already Exist!!!",
                error: error
            })
        })
        if (!user) {
            newStudent = new studentModel({
                FirstName: FirstName,
                LastName: LastName,
                email: email,
                password: password,
                mendarId
            })
            if (password == confirmPassword) {

                newStudent.save().then((responce) => {
                    res.status(200).send({
                        success: true,
                        message: "Mendar Created Successfully!!!",
                        data: responce
                    })
                }).catch((error) => {
                    res.status(402).send({
                        success: false,
                        message: "mendar Creates Failed!!!",
                        error: error
                    })
                })

            } else {
                res.status(401).send({
                    success: false,
                    message: "Password Are not Same !!!"
                })
            }
        } else {
            res.status(401).send({
                success: false,
                message: "Mendar Already Exist!!!"
            })
        }
        
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

module.exports = NewStudentRouter;