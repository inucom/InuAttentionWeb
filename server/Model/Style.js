const mongoose = require("mongoose");

const styleSchema = new mongoose.Schema({
    title:String,
    styleNum:Number,
    image:[String],
    auto:[[Number]],
    diffusion:[[Number]],
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    ttsNum:{
        type:Number,
        default:0,
    },
}, {collection:"styles"});

const Style = mongoose.model("Style",styleSchema);

module.exports = {Style};