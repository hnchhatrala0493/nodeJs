const {constants} = require("../constants");
const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode?req.statusCode:500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Failed.",
                messages:err.messages,
                stackTrace:err.stack
            });    
            break;
        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden",
                messages:err.messages,
                stackTrace:err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title:"Unauthorized Error",
                messages:err.messages,
                stackTrace:err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"Server Error.",
                messages:err.messages,
                stackTrace:err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"Not Found.",
                messages:err.messages,
                stackTrace:err.stack
            });
            break;      
        default:
            console.log("No Error");
            break;
    }
    res.json({messages:err.messages,stackTrace:err.stack});
}

module.exports=errorHandler;