const createError= require("http-errors")
//not found
function notFoundHandler(req,res,next){
    res.createError(404, "Your requested content was not found!")
}

//default error handler
function defaultErrorHandler(err, req, res, next){
    const status = req.status || 500;
    res.status(status).json(res.err)
}


module.exports = {
    notFoundHandler,
    defaultErrorHandler
}