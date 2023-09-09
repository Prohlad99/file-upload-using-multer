const User = require("../models/people");

//get all users
async function getUsers(req,res,next){
    try {
        const result = await User.find();
        res.status(200).json(result);
        
    } catch (error) {
        res.json(error)
    }
}


// post user 
async function addUser(req,res,next){
    const url = req.protocol + "://" + req.get("host");
    try {
        
        const formData = req.body;
        const avatar = url + "/uploads/avatars" + req.files[0].filename;
        const userObj={
            ...formData,
            avatar:avatar
        }
        const newUser = new User(userObj)
        await newUser.save()
    } catch (error) {
        res.json(error);
        
    }
}


module.exports ={
    getUsers,
    addUser
}