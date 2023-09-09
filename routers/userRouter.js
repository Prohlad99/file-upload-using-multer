const express = require("express");
const { getUsers, addUser } = require("../controllers/user");
const avatarUploader = require("../middlewares/users/avatarUploader");
const { addUserValidators, addUserValidatorsHandler } = require("../middlewares/users/userValidators");
const router = express.Router();

// get users 
router.get("/", getUsers)


// post a user 
router.post("/", avatarUploader, addUserValidators, addUserValidatorsHandler, addUser)


module.exports = router