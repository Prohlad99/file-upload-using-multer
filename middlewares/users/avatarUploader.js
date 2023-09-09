const uploader = require("../../utilities/fileUploader");

function avatarUploader(req,res, next){
    const upload = uploader(
        "avatars",
        ["image/jpeg","image/jpg","image/png"],
        2000000,
        "Only .jpeg .png and .jpg allowed!"
    )

    upload.any()(req,res,(err)=>{
        if(err){
            res.status(500).json({
                errors:{
                    avatar:{
                        msg:err.message,
                    }
                }
            })
        }else{
            next()
        }
    })
}

module.exports = avatarUploader