const path = require("path");
const multer = require("multer");
const createError = require("http-errors");

function uploader(subFolder, allowedFile, MaxFileSize, errorMsg){
    const UPLOAD_FOLDER = `${__dirname}/../public/uploads/${subFolder}/`;

    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, UPLOAD_FOLDER);
      },
      filename: function (req, file, cb) {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-")+"-"+Date.now();
        cb(null, fileName+fileExt);
      },
    });

    const upload = multer({
        storage:storage,
        limits:{
            fileSize:MaxFileSize,
        },
        fileFilter:(req, file, cb)=>{
            if(allowedFile.includes(file.mimetype)){
                cb(null, true)
            }else{
                createError(errorMsg)
            }
        }
    })

    return upload
    
}

module.exports = uploader;