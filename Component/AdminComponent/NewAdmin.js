const NewAdminRouter = require('express').Router()
const AdminModel = require('../../Models/adminModel')

NewAdminRouter.post('/new', async (req, res) => {
    const { FirstName, LastName, email, password, confirmPassword } = req.body;

    const user = await AdminModel.findOne({ email: email }).then().catch(() => {
        res.status(401).send({
            success: false,
            message: "Mendar Already Exist!!!",
            error: error
        })
    })
    if (!user) {
        newAdmin = new AdminModel({
            FirstName: FirstName,
            LastName: LastName,
            email: email,
            password: password
        })
        if (password == confirmPassword) {

            newAdmin.save().then((responce) => {
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
            message: "Mendar Already Exist!!!",

        })
    }

})

module.exports = NewAdminRouter