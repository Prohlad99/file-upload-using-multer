const mongoose= require("mongoose");

const peopleSchema = mongoose.Schema({
    username:String,
    email:String,
    avatar:String
})


const people = mongoose.model("people", peopleSchema);
module.exports = people;