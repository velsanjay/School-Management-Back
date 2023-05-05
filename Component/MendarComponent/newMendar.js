const NewMendarRouter = require('express').Router()
const MendorModel = require('../../Models/mendormodel')
const AdminModel = require('../../Models/adminModel')

NewMendarRouter.post('/new', async (req, res) => {

    const { adminId, FirstName, LastName, email, password, confirmPassword } = req.body;

    await AdminModel.findOne({ _id: adminId }).then(async() => {
        const user = await MendorModel.findOne({ email: email }).then().catch(() => {
            res.status(401).send({
                success: false,
                message: "Mendar Already Exist!!!",
                error: error
            })
        })
        if (!user) {
            newMendar = new MendorModel({
                FirstName: FirstName,
                LastName: LastName,
                email: email,
                password: password
            })
            if (password == confirmPassword) {

                newMendar.save().then((responce) => {
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
            message: "Admin Only allow the access!!!",
            error
        })
    })


})

module.exports = NewMendarRouter