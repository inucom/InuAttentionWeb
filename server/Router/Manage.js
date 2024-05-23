const express = require("express");
const router = express.Router();
const {Manage} = require("../Model/Manage");


router.post("/updateURL", (req,res) => {
    console.log(req.body.URL);
    try{
    Manage.findOneAndUpdate(
        {identifier:1},
        {URL: req.body.URL}).exec();
    } catch (err){
        return res.status(400).json({success:false});
    }
});


module.exports = router;