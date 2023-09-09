// external import 
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const { notFoundHandler, defaultErrorHandler } = require("./middlewares/common/errorHandler");
const { route } = require("./routers/userRouter");

//env configuration
dotenv.config();

// internal import
const port = process.env.PORT;
const uri = process.env.MONGO_URI;
const userRouter = require("./routers/userRouter");


// initialization
const app = express();
app.use(cors());
app.use(express.json());

//database connection
mongoose.connect(uri)
.then(()=>console.log("Database Connection Success!"))
.catch(err=>console.log(err));


//static folder
app.use(express.static(path.join(__dirname, "public")));

//routing
app.use("/", userRouter)

//not found handler
app.use(notFoundHandler);

//default error handler
app.use(defaultErrorHandler);


//listing port
app.listen(port, ()=>{
    console.log(`I am listing port ${port}`)
})