const mongoose = require("mongoose");
const projectSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter name"]
    },
    type:{
        type:String,
        required:[true,"Please Select category"]
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Projects",projectSchema);