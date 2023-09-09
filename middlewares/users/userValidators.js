const {check, validationResult} = require("express-validator");
const { unlink } = require("fs");
const path = require("path");

const addUserValidators = [
    check("username")
    .isLength({min: 1})
    .withMessage("Username is require"),

    check("email")
    .isEmail()
    .withMessage("Enter a valid email")
]

function addUserValidatorsHandler(req,res, next){
    const errors = validationResult(req);
    const mappedError = errors.mapped()

    if(Object.keys(mappedError) === 0){
        next()
    }else{
        if(req.files.length > 0){
            const { filename } = req.files[0];
            unlink(
                path.join(__dirname`/../uploads/avatars/${filename}`),
                (err)=>{
                    console.log(err)
                }
            )
            
        }

    }
}

module.exports = {
    addUserValidators,
    addUserValidatorsHandler
}