const mongoose = require("mongoose");

const manageSchema = new mongoose.Schema({
    identifier:Number,
    URL:String,
}, {collection:"manages"});

const Manage = mongoose.model("Manage",manageSchema);

module.exports = {Manage};